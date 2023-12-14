// SearchPage.tsx
import React, { useEffect } from "react";
import { useApiUtil } from "../../api/useApiUtil";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { useData } from "../../contexts/DataContext";
import styles from "../home/Home.module.css";

const SearchPage: React.FC = () => {
  const { searchTerm, currentSearchSource } = useData();
  // Provide a default value for termProp
  const termProp = searchTerm !== null ? searchTerm : "";

  const { data } = useApiUtil({
    term: termProp,
    currentSearchSource,
  });

  // useEffect hook to print the value of term whenever it changes
  useEffect(() => {
    console.log("Term:", searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className="searchPage_header">
        <CFIALogo />

        <div className="searchBar-container-search">
          <SearchBar />
        </div>
      </div>
      <SearchResultList data={data} query={termProp} />
    </div>
  );
};

export default SearchPage;
