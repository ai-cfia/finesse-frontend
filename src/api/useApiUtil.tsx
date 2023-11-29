import { useEffect, useState } from "react";
import type { QueryResult, SearchSource } from "../types";

// Helper function to construct the endpoint URL using environment variable as base
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

// TypeScript interfaces to define the structure of expected props and data
interface UseApiUtilProps {
  term: string;
  currentSearchSource: SearchSource;
}

// Defining a type for an array of QueryResult objects
type ResponseData = QueryResult[];

export const useApiUtil = ({
  term,
  currentSearchSource,
}: UseApiUtilProps): { data: ResponseData | null } => {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    if (!isNonEmptyString(term)) {
      setData(null);
      return;
    }

    const fetchData = async (): Promise<void> => {
      const endpoint = GetEndpoint(`/search/${currentSearchSource}`);

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: term }),
        });

        if (!response.ok) {
          console.error("Failed to fetch data with status:", response.status);
          setData(null);
          return;
        }

        const resultsData: ResponseData = await response.json();
        setData(resultsData);
      } catch (error) {
        console.error("API request failed with error: ", error);
        setData(null);
      }
    };

    fetchData().catch((error) => {
      console.error("Error fetching data in fetchData: ", error);
    });
  }, [term, currentSearchSource]);

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
export const PingBackend = async (): Promise<any> => {
  try {
    // Sending a POST request to the backend to test connectivity
    const response = await fetch(GetEndpoint("/health"));

    if (!response.ok) {
      console.error("Ping request failed with status: ", response.status);
      throw new Error("Ping request to backend failed");
    }

    // Logging successful connection
    console.log("Active Server Connection");
    return await response.text();
  } catch (error) {
    console.error("Ping request failed with error: ", error);
    throw error;
  }
};

// Utility function to check if a string is non-empty
function isNonEmptyString(str: string | undefined | null): str is string {
  return typeof str === "string" && str.trim() !== "";
}
