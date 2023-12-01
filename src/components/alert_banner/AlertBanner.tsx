import React from "react";
import "./AlertBanner.css";

interface AlertBannerProps {
  alertMessage: string | null;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ alertMessage }) => {
  if (alertMessage === null) return null;

  return <div className="warning">{alertMessage}</div>;
};

export default AlertBanner;
