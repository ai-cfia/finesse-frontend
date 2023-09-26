// useApiUtil.tsx
import { useState, useEffect } from "react";
import testData from "../test_data/testData.json"; // Make sure the path points to your test data file

// Function to generate the endpoint URL based on the path
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

// Custom hook for making API requests
export const useApiUtil = (
  term: string,
  useSimulatedData: boolean,
): { data: any } => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (useSimulatedData) {
        setData(testData); // Use the test data directly if useSimulatedData is true
      } else {
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
            console.log("This is the data: ", responseData);
          } else {
            throw new Error("Request failed");
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      }
    };

    fetchData().catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }, [term, useSimulatedData]); // Make sure to include useSimulatedData in the dependency array

  return { data };
};

// Function to ping the backend (remains unchanged)
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
