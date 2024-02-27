import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { config } from "../config";

// Type for your context state
interface LayoutContextState {
  isDebugPanelVisible: boolean;
  toggleDebugPanel: () => void;
  isDebugButtonVisible: boolean;
  isAlertBannerVisible: boolean;
  setIsAlertBannerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const LayoutContext = createContext<LayoutContextState>({
  isDebugPanelVisible: false,
  toggleDebugPanel: () => {},
  isDebugButtonVisible: false,
  isAlertBannerVisible: false,
  setIsAlertBannerVisible: () => {},
});

// Create a provider component
export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

// Custom hook to use the layout context
export const useLayout = (): LayoutContextState => {
  const context = useContext(LayoutContext);
  if (context === null) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
