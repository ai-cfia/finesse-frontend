// SearchPage.tsx
import React, { useEffect } from "react";
import styles from "../home/Home.module.css";
import Header from "../../components/header/Header";
import { useStateValue } from "../../StateProvider";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { useApiUtil } from "../../api/useApiUtil";

interface SearchResult {
  id: string;
  url: string;
  title: string;
  content: string;
}

const SearchPage: React.FC = () => {
  const {
    state: { term, useSimulatedData }, // Directly get useSimulatedData from the global state
  } = useStateValue();
  const termProp = term !== null ? term : ""; // Provide a default value for termProp

  const { data } = useApiUtil<SearchResult[]>({
    term: termProp,
    useSimulatedData,
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
