// SearchPage.tsx
import React, { useEffect } from "react";
import styles from "../home/Home.module.css";
import Header from "../../components/header/Header";
import { useStateValue } from "../../StateProvider";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";

const SearchPage: React.FC = () => {
  const {
    state: { term },
  } = useStateValue();
  const termProp = term !== null ? term : undefined;

  // useEffect hook to print the value of term whenever it changes
  useEffect(() => {
    console.log("Term:", term);
  }, [term]);

  return (
    <div className={styles.layout}>
      <Header />

      <div className="searchPage_header">
        <CFIALogo />

        <div className="searchBar-container-search">
          <SearchBar term={termProp} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
