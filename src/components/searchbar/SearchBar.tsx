import * as React from "react";
import { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { ActionTypes, SearchSource } from "../../types";
import "./SearchBar.css";

interface SearchBarProps {
  term?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ term }) => {
  const {
    state: { currentSearchSource },
    dispatch,
  } = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [previousSearchQuery, setPreviousSearchQuery] = useState<
    string | undefined
  >("");

  useEffect(() => {
    if (typeof term === "undefined") {
      setPreviousSearchQuery("Type to search...");
    } else {
      setPreviousSearchQuery(term);
    }
  }, [term]);

  const search = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate("/search");

    // Ignore dispatch if useSimulatedData is true
    // TODO: revisit
    if (currentSearchSource === SearchSource.Simulated && searchQuery === "") {
      console.log("Search dispatch ignored because useSimulatedData is true");
      return;
    }

    dispatch({
      type: ActionTypes.SetSearchTerm,
      payload: searchQuery,
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
