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
  // Log the received data and query
  console.log("Received data:", data);
  console.log("Received query:", query);

  // Check if data is null or an empty array
  if (data === null) {
    console.log("Data is null");
  } else if (data.length === 0) {
    console.log("Data array is empty");
  }

  return (
    <ResultList>
      {data?.map((item, index) => {
        // Log each item in the data array
        console.log(`Rendering item at index ${index}:`, item);
        return <SearchResult key={item.id} item={item} query={query} />;
      })}
    </ResultList>
  );
};

export default SearchResultList;
