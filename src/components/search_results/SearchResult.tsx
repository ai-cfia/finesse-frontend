// SearchResult.tsx
import React from "react";
import ResultContent from "../highlighted_content/HighlightedContent";
import "./SearchResultsList.css";

interface SearchResultProps {
  item: {
    id: string;
    url: string;
    title: string;
    content: string;
  };
  query: string;
}

// Search Result Component
const SearchResult: React.FC<SearchResultProps> = ({ item }) => {
  return (
    <div className="search-result">
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <p className="title" style={{ color: "blue" }}>
          {item.title}
        </p>
        <div>
          <span className="url">{item.url}</span>
        </div>
      </a>
      <div>
        <ResultContent content={item.content} />
      </div>
    </div>
  );
};

export default SearchResult;
