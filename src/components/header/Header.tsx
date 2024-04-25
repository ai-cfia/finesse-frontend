import React from "react"; // Import 'React' from the 'react' package.
import cfia from "../../assets/CFIA_Banner.png";
import styles from "../../pages/home/Home.module.css";
import AlertBanner from "../alert_banner/AlertBanner";
import DebugButton from "../debug_button/DebugButton";
import { DebugPanel } from "../debug_panel/DebugPanel";
import { HeaderContainer } from "../../styles/indexElements";
import { environment } from "../../environments/environment";

// Header Component -> Displays CFIA banner image.
const Header: React.FC = () => {
  // Add type annotation for the component.
  return (
    <header className={styles.header} role={"banner"}>
      <HeaderContainer>
        <nav>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavLeftMargin}>
              <a href="https://inspection.canada.ca/" title="ACIA | CFIA">
                <img
                  src={cfia}
                  alt="CFIA logo"
                  aria-label="Link to CFIA | Lien à l'ACIA"
                  style={{ height: 50 }}
                />
              </a>
            </li>
            <li className={styles.headerRightText}>Alpha Version {environment.version !== "" ? "v" + environment.version : ""}</li>
          </ul>
        </nav>
      </HeaderContainer>
      <AlertBanner />
      <DebugButton
        style={{
          cursor: "pointer",
          zIndex: 1001,
          position: "absolute",
          margin: "10px",
          color: "black",
        }}
      />
      <DebugPanel />
    </header>
  );
};

export default Header;
