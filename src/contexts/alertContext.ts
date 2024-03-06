import { createContext, useContext } from "react";

// Type for the alert context state
interface AlertContextState {
  alertMessage: string | null;
  setAlertMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with a default value
export const AlertContext = createContext<AlertContextState>({
  alertMessage: null,
  setAlertMessage: () => {},
});

// Custom hook to use the alert context
export const useAlert = (): AlertContextState => {
  const context = useContext(AlertContext);
  if (context === null) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
