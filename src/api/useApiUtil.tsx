import { useState, useEffect } from "react";

// Function to generate the endpoint URL based on the path
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

interface UseApiUtilProps {
  term: string;
  useSimulatedData: boolean;
}

interface QueryIndexEntry {
  query: string;
  results_filename: string;
}

interface QueryResult {
  id: string;
  url: string;
  title: string;
  content: string;
}

type ResponseData = QueryResult[];

export const useApiUtil = ({
  term,
  useSimulatedData,
}: UseApiUtilProps): { data: ResponseData | null } => {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const baseUrl = process.env.REACT_APP_SIMULATED_RESPONSES_INDEX_URL;

      if (!isNonEmptyString(baseUrl)) {
        console.error("Base URL is not defined or is empty");
        setData(null);
        return;
      }

      if (useSimulatedData && isNonEmptyString(term)) {
        try {
          // Step 1: Fetch the index of queries and result filenames
          const indexResponse = await fetch(`${baseUrl}index.json`);
          if (!indexResponse.ok) {
            console.error(
              "Index fetch failed with status: ",
              indexResponse.status,
            );
            setData(null);
            return;
          }
          const queryIndex: QueryIndexEntry[] = await indexResponse.json();

          // Step 2: Find the match in the index
          const normalizedTerm = term.toLowerCase();
          const matchingEntry = queryIndex.find(
            (entry) => entry.query.toLowerCase() === normalizedTerm,
          );
          if (matchingEntry === null || matchingEntry === undefined) {
            console.log("No matching query found");
            setData(null);
            return;
          }

          // Step 3: Fetch the results based on the results filename
          const resultsResponse = await fetch(
            `${baseUrl}${matchingEntry.results_filename}`,
          );
          if (!resultsResponse.ok) {
            console.error(
              "Results fetch failed with status: ",
              resultsResponse.status,
            );
            setData(null);
            return;
          }
          const resultsData: ResponseData = await resultsResponse.json();

          // Step 4: Set the results data
          setData(resultsData);
        } catch (error) {
          console.error("API request failed with error: ", error);
          setData(null);
        }
      } else {
        // Handle the non-simulated data case if necessary
        console.log("Not using simulated data or term is empty");
        setData(null);
      }
    };

    fetchData().catch((error) => {
      console.error("Error fetching data in fetchData: ", error);
    });
  }, [term, useSimulatedData]);

  return { data };
};

export const PingBackend = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "" }),
    });

    if (!response.ok) {
      console.error("Ping request failed with status: ", response.status);
      throw new Error("Ping request to backend failed");
    }

    console.log("Active Server Connection");
    return await response.json();
  } catch (error) {
    console.error("Ping request failed with error: ", error);
    throw error;
  }
};

function isNonEmptyString(str: string | undefined | null): str is string {
  return typeof str === "string" && str.trim() !== "";
}
