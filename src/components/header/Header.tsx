import React from "react"; // Import 'React' from the 'react' package.
import cfia from "../../assets/CFIA_Banner.png";
import styles from "../../pages/home/Home.module.css";
import { HeaderContainer } from "../../styles/indexElements";

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
            <li className={styles.headerRightText}>Alpha Version</li>
          </ul>
        </nav>
      </HeaderContainer>
    </header>
  );
};

export default Header;
