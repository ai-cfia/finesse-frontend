import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

interface UseApiUtilProps<T> {
  term: string;
  useSimulatedData: boolean;
  simulatedData?: T;
}

// Function to generate the endpoint URL based on the path
export const GetEndpoint = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL ?? "";
  return baseUrl + path;
};

// Custom hook for making API requests
export const useApiUtil = <T,>(
  props: UseApiUtilProps<T>,
): { data: T | null } => {
  const { state } = useStateValue();
  const { term, useSimulatedData, simulatedData } = state;

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    console.log("useApiUtil Hook triggered");
    console.log("Term: ", term);
    console.log("Use Simulated Data: ", useSimulatedData);
    console.log("Simulated Data: ", simulatedData);

    const fetchData = async (): Promise<void> => {
      if (
        useSimulatedData &&
        simulatedData !== null &&
        simulatedData !== undefined
      ) {
        console.log("Setting data from simulated data");
        setData(simulatedData);
      } else if (term !== null && term !== undefined && term.trim() !== "") {
        console.log("Fetching data from API");
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
            console.log("API data fetched successfully: ", responseData);
            setData(responseData);
          } else {
            console.error("API request failed with status: ", response.status);
            setData(null);
          }
        } catch (error) {
          console.error("API request failed with error: ", error);
          setData(null);
        }
      } else {
        console.log(
          "Term is null, empty or Use Simulated Data is true without data, not fetching data",
        );
        setData(null);
      }
    };

    fetchData().catch((error) => {
      console.error("Error fetching data in fetchData: ", error);
    });
  }, [term, useSimulatedData, simulatedData]);

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
      const data = await response.json();
      return data;
    } else {
      console.error(
        "Initializing ping request to backend failed with status: ",
        response.status,
      );
      throw new Error("Initializing ping request to backend failed");
    }
  } catch (error) {
    console.error("Ping request failed with error: ", error);
    throw error;
  }
};
