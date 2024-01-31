import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Type for the alert context state
interface AlertContextState {
  alertMessage: string | null;
  setAlertMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with a default value
const AlertContext = createContext<AlertContextState>({
  alertMessage: null,
  setAlertMessage: () => {},
});

// Create a provider component for the alert context
export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use the alert context
export const useAlert = (): AlertContextState => {
  const context = useContext(AlertContext);
  if (context === null) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
