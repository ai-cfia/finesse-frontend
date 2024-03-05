import React, { useEffect, useState, type ReactNode } from "react";
import { config } from "../config";
import { LayoutContext } from "./layoutContext";

// Create a provider component
const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDebugPanelVisible, setIsDebugPanelVisible] = useState(false);
  const [isDebugButtonVisible, setIsDebugButtonVisible] = useState(false);
  const [isAlertBannerVisible, setIsAlertBannerVisible] = useState(false);

  useEffect(() => {
    setIsDebugButtonVisible(config.debugMode);
  }, []);

  const toggleDebugPanel = (): void => {
    console.log("Toggling Debug Panel visibility");
    setIsDebugPanelVisible(!isDebugPanelVisible);
  };

  return (
    <LayoutContext.Provider
      value={{
        isDebugPanelVisible,
        toggleDebugPanel,
        isDebugButtonVisible,
        isAlertBannerVisible,
        setIsAlertBannerVisible,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
