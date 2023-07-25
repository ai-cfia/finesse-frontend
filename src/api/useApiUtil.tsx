// useApiUtil.tsx
import { useState, useEffect } from "react";

// Function to generate the endpoint URL based on the path
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

// Custom hook for making API requests
export const useApiUtil = (term: string): { data: any } => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(GetEndpoint("/search"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: term,
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData);
          console.log("This is the data: ", responseData);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    console.log(term);
    fetchData().catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }, [term]);

  return { data };
};

// Function to ping the backend
export const PingBackend = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "",
      }),
    });

    if (response.ok) {
      console.log("Active Server Connection");
      const data = await response.json(); // Parse the response body
      return data; // Return the response data
    } else {
      throw new Error("Warning: Initializing ping request to backend failed.");
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error; // Re-throw the error
  }
};
