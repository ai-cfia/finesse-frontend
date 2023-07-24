// SearchResult.tsx
import React from "react";
import "./SearchResultsList.css";
import HighlightedContent from "../highlighted_content/HighlightedContent";

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
const SearchResult: React.FC<SearchResultProps> = ({ item, query }) => {
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
        <HighlightedContent content={item.content} query={query} />
      </div>
    </div>
  );
};

export default SearchResult;
