import * as React from "react";
import { useEffect, useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

interface SearchBarProps {
  term?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ term }) => {
  const { state, dispatch } = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [previousSearchQuery, setPreviousSearchQuery] = useState<string>("");

  useEffect(() => {
    if (typeof term === "undefined") {
      setPreviousSearchQuery("Type to search...");
    } else {
      setPreviousSearchQuery(term);
      setSearchQuery(term);
    }
  }, [term]);

  const search = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate("/search");
    // Ignore dispatch if useSimulatedData is true
    if (state.useSimulatedData && searchQuery === "") {
      console.log("Search dispatch ignored because useSimulatedData is true");
      return;
    }

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchQuery,
    });
  };

  return (
    <form className="form-wrapper">
      <div className="input-wrapper">
        <FaSearch id="fa-arrow-right" />
        <input
          placeholder={previousSearchQuery}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="button" type="submit" onClick={search}>
          <FaArrowRight id="fa-arrow-right" style={{ color: "#05486c" }} />
        </button>
      </div>
    </form>
  );
};
