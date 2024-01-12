import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";
import styles from "../../pages/home/Home.module.css";

const CFIALogo: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div>
      <a
        href="/"
        title="ACIA | CFIA"
        data-testid="cfia-logo"
        onClick={handleClick}
      >
        <img src={cfia} alt="CFIA logo" className={styles.githubLogo} />
      </a>
    </div>
  );
};

export default CFIALogo;
