import * as React from "react";
import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import "./SearchBar.css";

const SEARCH_PLACEHOLDER = "Type to search...";

export const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useData();
  const [searchQuery, setSearchQuery] = useState(searchTerm ?? "");
  const navigate = useNavigate();

  const search = (e: React.FormEvent): void => {
    e.preventDefault();
    const trimmedSearchQuery = searchQuery.trim();
    if (trimmedSearchQuery === "") {
      console.warn("Empty string search not allowed.");
      return;
    }
    // TODO: do we want to navigate every time?
    navigate("/search");
    setSearchTerm(trimmedSearchQuery);
  };

  return (
    <form className="form-wrapper">
      <div className="input-wrapper">
        <FaSearch id="fa-arrow-right" data-testid="search-icon" />
        <input
          placeholder={SEARCH_PLACEHOLDER}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          data-testid="search-input"
        />
        <button
          className="button"
          type="submit"
          onClick={search}
          data-testid="submit-button"
        >
          <FaArrowRight id="fa-arrow-right" style={{ color: "#05486c" }} />
        </button>
      </div>
    </form>
  );
};
