// SearchPage.tsx
import React, { useEffect, useState } from "react";
import { search } from "../../api/useApiUtil";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { useData } from "../../contexts/dataContext";
import {
  LayoutContainer,
  SearchBarSearchContainer,
  SearchPageHeaderContainer,
} from "../../styles/indexElements";
import { ResponseData } from "../../types";

const SearchPage: React.FC = () => {
  const { searchTerm, currentSearchSource } = useData();
  // Provide a default value for termProp
  const termProp = searchTerm !== null ? searchTerm : "";
  const [data, setData] = useState<ResponseData | null>(null);

  // useEffect hook to print the value of term whenever it changes
  useEffect(() => {
    console.log("Term:", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    search(termProp, currentSearchSource)
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.error("Error using api", e));
  }, [termProp, currentSearchSource]);

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
