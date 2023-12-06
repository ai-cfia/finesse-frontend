import React from "react"; // Import 'React' from the 'react' package.
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";
import styles from "../../pages/home/Home.module.css";

const baseUrl: string = process.env.REACT_APP_BASENAME as string;

// Header Component -> Displays CFIA banner image.
const CFIALogo: React.FC = () => {
  // Add type annotation for the component.
  return (
    <div>
      <a href={"/" + baseUrl} title="ACIA | CFIA">
        <img src={cfia} alt="CFIA logo" className={styles.githubLogo} />
      </a>
    </div>
  );
};

export default CFIALogo;
