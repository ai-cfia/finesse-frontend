// SearchPage.tsx
import React, { useEffect } from "react";
import { useApiUtil } from "../../api/useApiUtil";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { useData } from "../../contexts/DataContext";
import {
  LayoutContainer,
  SearchPageHeaderContainer,
  SearchBarSearchContainer,
} from "../../styles/indexElements";

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
    <LayoutContainer>
      <Header />
      <SearchPageHeaderContainer>
        <CFIALogo />
        <SearchBarSearchContainer>
          <SearchBar />
        </SearchBarSearchContainer>
      </SearchPageHeaderContainer>
      <SearchResultList data={data} query={termProp} />
    </LayoutContainer>
  );
};

export default SearchPage;
