import { config } from "../config";
import { ResponseData, SearchSource } from "../types";

// Helper function to construct the endpoint URL using environment variable as base
export const GetEndpoint = (path: string): string => {
  const baseUrl = config.backendUrl ?? "";
  return baseUrl + path;
};

// Main search function
export const search = async (
  term: string,
  currentSearchSource: SearchSource
): Promise<ResponseData | null> => {
  if (!isNonEmptyString(term)) return null;
  return await fetchFromBackend(term, currentSearchSource);
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
