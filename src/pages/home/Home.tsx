import React from "react"; // Import 'React' from the 'react' package.
import { SearchBar } from "../../components/searchbar/SearchBar";
import styles from "../home/Home.module.css";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";

const Home: React.FC = () => {
  // Add type annotation for the component.
  return (
    <div className={styles.layout}>
      <Header />
      <div className="logo-container">
        <CFIALogo />
      </div>
      <div className="searchBar-container">
        <SearchBar />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: 20,
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
      >
        <text>Empowering agency&apos;s users with precision search.</text>
        <text style={{ marginTop: 10 }}>
          Équiper les utilisateurs de l&apos;agence avec la recherche de
          précision.
        </text>
      </div>
    </div>
  );
};

export default Home;
