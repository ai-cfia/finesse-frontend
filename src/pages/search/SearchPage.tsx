// SearchPage.tsx
import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { useApiUtil } from "../../api/useApiUtil";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { SearchBar } from "../../components/searchbar/SearchBar";
import styles from "../home/Home.module.css";

const SearchPage: React.FC = () => {
  const {
    state: { term, currentSearchSource },
  } = useStateValue();
  const termProp = term !== null ? term : ""; // Provide a default value for termProp

  const { data } = useApiUtil({
    term: termProp,
    currentSearchSource,
  });

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
      <SearchResultList data={data} query={termProp} />
    </div>
  );
};

export default SearchPage;
