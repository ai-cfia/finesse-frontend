import React from "react";
import { useAlert } from "../../contexts/AlertContext";
import { useLayout } from "../../contexts/LayoutContext";
import "./AlertBanner.css";

const AlertBanner: React.FC = () => {
  const { setIsAlertBannerVisible } = useLayout();
  const { alertMessage } = useAlert();
  if (alertMessage === null) {
    setIsAlertBannerVisible(false);
    return null;
  }

  setIsAlertBannerVisible(true);
  return <div className="warning">{alertMessage}</div>;
};

export default AlertBanner;
