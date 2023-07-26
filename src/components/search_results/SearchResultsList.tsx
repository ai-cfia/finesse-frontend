// SearchResultsList.tsx
import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";
import { ResultList } from "../../styles/indexElements";

interface SearchResultListProps {
  data: Array<{
    id: string;
    url: string;
    title: string;
    content: string;
  }> | null;
  query: string;
}

// Search Result Component -> Displays a list of results retrieved from the back-end server.
const SearchResultList: React.FC<SearchResultListProps> = ({ data, query }) => {
  return (
    <ResultList>
      {data?.map((item) => (
        <SearchResult key={item.id} item={item} query={query} />
      ))}
    </ResultList>
  );
};

export default SearchResultList;
