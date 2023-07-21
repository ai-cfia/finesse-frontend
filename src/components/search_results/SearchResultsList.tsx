// SearchResultsList.tsx
import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

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
    <div className="results-list">
      {data?.map((item) => (
        <SearchResult key={item.id} item={item} query={query} />
      ))}
    </div>
  );
};

export default SearchResultList;
