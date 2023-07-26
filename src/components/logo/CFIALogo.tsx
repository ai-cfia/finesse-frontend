import React from "react"; // Import 'React' from the 'react' package.
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";

// Header Component -> Displays CFIA banner image.
const CFIALogo: React.FC = () => {
  // Add type annotation for the component.
  return (
    <div>
      <a href="/" title="ACIA | CFIA">
        <img src={cfia} alt="CFIA logo" style={{ height: 110 }} />
      </a>
    </div>
  );
};

export default CFIALogo;
