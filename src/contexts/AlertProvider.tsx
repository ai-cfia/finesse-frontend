import React, { useState, type ReactNode } from "react";
import { AlertContext } from "./alertContext";

// Create a provider component for the alert context
const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
