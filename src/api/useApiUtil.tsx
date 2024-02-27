import { useEffect, useState } from "react";
import { config } from "../config";
import { SearchSource, type QueryResult } from "../types";

// Helper function to construct the endpoint URL using environment variable as base
export const GetEndpoint = (path: string): string => {
  const baseUrl = config.backendUrl ?? "";
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
      if (
        !isNonEmptyString(config.backendUrl) &&
        currentSearchSource === SearchSource.static
      ) {
        const staticData = await fetchStaticData(term);
        setData(staticData);
        return;
      }

      const backendData = await fetchFromBackend(term, currentSearchSource);
      setData(backendData);
    };

    fetchData().catch((error) => {
      console.error("Error fetching data in fetchData: ", error);
    });
  }, [term, currentSearchSource]);

  return { data };
};

// Function to fetch static data from finesse-data
export const fetchStaticData = async (
  term: string
): Promise<ResponseData | null> => {
  const githubApiUrl = config.githubApiUrl ?? "";

  try {
    // Fetching the list of files from GitHub repository
    const response = await fetch(githubApiUrl);
    if (!response.ok) {
      console.error("Failed to fetch data with status:", response.status);
      return null;
    }

    // Parsing the JSON response to an array of files with their download URLs
    const data: Array<{ name: string; download_url: string }> =
      await response.json();

    // Normalizing the search term to lower case
    const normalizedTerm = term.toLowerCase();

    // Finding the matching file based on the normalized term
    const matchingFile = data.find((file) =>
      file.name.toLowerCase().includes(normalizedTerm + ".json")
    );

    // Handling the case where no matching file is found
    if (matchingFile == null) {
      console.log("No matching file found");
      return null;
    }

    // Fetching the actual data from the matched file's download URL
    const resultsResponse = await fetch(matchingFile.download_url);
    if (!resultsResponse.ok) {
      console.error(
        "Results fetch failed with status: ",
        resultsResponse.status
      );
      return null;
    }

    // Parsing the fetched data into the expected format and setting it to state
    const resultsData: ResponseData = await resultsResponse.json();
    return resultsData;
  } catch (error) {
    console.error("API request failed with error: ", error);
    return null;
  }
};

// Function to search from backend
export const fetchFromBackend = async (
  term: string,
  currentSearchSource: SearchSource
): Promise<ResponseData | null> => {
  try {
    const endpoint = GetEndpoint(`/search/${currentSearchSource}`);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: term }),
    });
    if (!response.ok) {
      console.error("Failed to fetch data with status:", response.status);
      return null;
    }
    const resultsData: ResponseData = await response.json();
    return resultsData;
  } catch (error) {
    console.error("API request failed with error: ", error);
    return null;
  }
};

// Function to fetch filenames from the GitHub repository
export const fetchFilenames = async (): Promise<string[]> => {
  type FileItem = {
    type: string;
    name: string;
  };

  try {
    // Fetching the contents of the repository
    const response = await fetch(config.githubApiUrl ?? "");
    if (!response.ok) {
      console.error("Failed to fetch filenames with status:", response.status);
      return [];
    }
    // Filtering the response to only include .json files and removing the extension for display
    const data = await response.json();
    const filenames = data
      .filter(
        (item: FileItem) => item.type === "file" && item.name.endsWith(".json")
      )
      .map((item: FileItem) => item.name.replace(".json", ""));
    return filenames;
  } catch (error) {
    console.error("Error fetching filenames:", error);
    return [];
  }
};

// Function to test connectivity with the backend
export const PingBackend = async (): Promise<string> => {
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
