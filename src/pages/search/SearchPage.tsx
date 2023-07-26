// SearchPage.tsx
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useStateValue } from "../../StateProvider";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";
import SearchResultList from "../../components/search_results/SearchResultsList";
import { useApiUtil } from "../../api/useApiUtil";
import {
  LayoutContainer,
  SearchPageHeaderContainer,
  SearchBarSearchContainer,
} from "../../styles/indexElements";

const SearchPage: React.FC = () => {
  const {
    state: { term },
  } = useStateValue();
  const termProp = term !== null ? term : ""; // Provide a default value for termProp

  const { data } = useApiUtil(termProp); // Use termProp instead of term

  // useEffect hook to print the value of term whenever it changes
  useEffect(() => {
    console.log("Term:", term);
  }, [term]);

  return (
    <LayoutContainer>
      <Header />
      <SearchPageHeaderContainer>
        <CFIALogo />
        <SearchBarSearchContainer>
          <SearchBar term={termProp} />
        </SearchBarSearchContainer>
      </SearchPageHeaderContainer>
      <SearchResultList data={data} query={termProp} />{" "}
      {/* Use termProp instead of term */}
    </LayoutContainer>
  );
};

export default SearchPage;
