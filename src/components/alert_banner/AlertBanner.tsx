import React, { useEffect } from "react";
import { useAlert } from "../../contexts/alertContext";
import { useLayout } from "../../contexts/layoutContext";
import { WarningLabel } from "../../styles/indexElements";

const AlertBanner: React.FC = () => {
  const { setIsAlertBannerVisible } = useLayout();
  const { alertMessage } = useAlert();

  useEffect(() => {
    setIsAlertBannerVisible(alertMessage === null);
  }, [alertMessage, setIsAlertBannerVisible]);

  if (alertMessage === null) return null;
  return <WarningLabel>{alertMessage}</WarningLabel>;
};

export default AlertBanner;
