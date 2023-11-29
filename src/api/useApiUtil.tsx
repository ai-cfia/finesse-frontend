import { useEffect, useState } from "react";
import { type QueryResult, SearchSources } from "../types";

// Helper function to construct the endpoint URL using environment variable as base
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

// TypeScript interfaces to define the structure of expected props and data
interface UseApiUtilProps {
  term: string;
  currentSearchSource: SearchSources;
}

// Defining a type for an array of QueryResult objects
type ResponseData = QueryResult[];

// Custom hook for fetching data based on the search term and simulated data flag
export const useApiUtil = ({
  term,
  currentSearchSource,
}: UseApiUtilProps): { data: ResponseData | null } => {
  const [data, setData] = useState<ResponseData | null>(null);

  // useEffect hook to trigger data fetching when term or useSimulatedData changes
  useEffect(() => {
    // Async function to fetch data
    const fetchData = async (): Promise<void> => {
      const githubApiUrl =
        "https://api.github.com/repos/ai-cfia/finesse-data/contents";

      // Conditional fetching depending on whether simulated data is used
      if (
        currentSearchSource === SearchSources.Simulated &&
        isNonEmptyString(term)
      ) {
        try {
          // Fetching the list of files from GitHub repository
          const response = await fetch(githubApiUrl);
          if (!response.ok) {
            console.error("Failed to fetch data with status:", response.status);
            setData(null);
            return;
          }

          // Parsing the JSON response to an array of files with their download URLs
          const data: Array<{ name: string; download_url: string }> =
            await response.json();

          // Normalizing the search term to lower case
          const normalizedTerm = term.toLowerCase();

          // Finding the matching file based on the normalized term
          const matchingFile = data.find((file) =>
            file.name.toLowerCase().includes(normalizedTerm + ".json"),
          );

          // Handling the case where no matching file is found
          if (matchingFile == null) {
            console.log("No matching file found");
            setData(null);
            return;
          }

          // Fetching the actual data from the matched file's download URL
          const resultsResponse = await fetch(matchingFile.download_url);
          if (!resultsResponse.ok) {
            console.error(
              "Results fetch failed with status: ",
              resultsResponse.status,
            );
            setData(null);
            return;
          }

          // Parsing the fetched data into the expected format and setting it to state
          const resultsData: ResponseData = await resultsResponse.json();
          setData(resultsData);
        } catch (error) {
          console.error("API request failed with error: ", error);
          setData(null);
        }
      } else {
        // Handling real data fetching case
        // (Please note, the real data fetching logic seems to be incomplete or not shown here)
        try {
          // Fetching data from a custom endpoint
          const response = await fetch(GetEndpoint("/search"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: term,
            }),
          });

          // Handling the response and setting the data
          if (response.ok) {
            const responseData = await response.json();
            setData(responseData);
            console.log("This is the data: ", responseData);
          } else {
            throw new Error("Request failed");
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      }
    };

    // Executing the fetchData function and catching any unhandled errors
    fetchData().catch((error) => {
      console.error("Error fetching data in fetchData: ", error);
    });
  }, [term, currentSearchSource]); // Dependencies for the useEffect hook

  return { data };
};

// Function to fetch filenames from the GitHub repository
export const fetchFilenames = async (): Promise<string[]> => {
  try {
    // Fetching the contents of the repository
    const response = await fetch(
      "https://api.github.com/repos/ai-cfia/finesse-data/contents",
    );
    if (!response.ok) {
      console.error("Failed to fetch filenames with status:", response.status);
      return [];
    }
    // Filtering the response to only include .json files and removing the extension for display
    const data = await response.json();
    const filenames = data
      .filter(
        (item: any) => item.type === "file" && item.name.endsWith(".json"),
      )
      .map((item: any) => item.name.replace(".json", ""));
    return filenames;
  } catch (error) {
    console.error("Error fetching filenames:", error);
    return [];
  }
};

// Function to test connectivity with the backend
export const PingBackend = async (endpoint: string): Promise<any> => {
  try {
    // Sending a POST request to the backend to test connectivity
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "" }),
    });

    if (!response.ok) {
      console.error("Ping request failed with status: ", response.status);
      throw new Error("Ping request to backend failed");
    }

    // Logging successful connection
    console.log("Active Server Connection");
    return await response.json();
  } catch (error) {
    console.error("Ping request failed with error: ", error);
    throw error;
  }
};

// Utility function to check if a string is non-empty
function isNonEmptyString(str: string | undefined | null): str is string {
  return typeof str === "string" && str.trim() !== "";
}
