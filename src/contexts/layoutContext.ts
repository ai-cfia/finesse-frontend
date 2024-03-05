import React, { createContext, useContext } from "react";

// Type for your context state
interface LayoutContextState {
  isDebugPanelVisible: boolean;
  toggleDebugPanel: () => void;
  isDebugButtonVisible: boolean;
  isAlertBannerVisible: boolean;
  setIsAlertBannerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
export const LayoutContext = createContext<LayoutContextState>({
  isDebugPanelVisible: false,
  toggleDebugPanel: () => {},
  isDebugButtonVisible: false,
  isAlertBannerVisible: false,
  setIsAlertBannerVisible: () => {},
});

// Custom hook to use the layout context
export const useLayout = (): LayoutContextState => {
  const context = useContext(LayoutContext);
  if (context === null) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
