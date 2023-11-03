import * as React from "react";
import { useEffect, useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer"; // Make sure to import the actionTypes correctly
import { FormWrapper, InputWrapper } from "../../styles/indexElements";

interface SearchBarProps {
  term?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ term }) => {
  // eslint-disable-next-line
  const { state, dispatch } = useStateValue();
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

  // On form submission perform search.
  const search = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchQuery,
    });
  };

  return (
    <FormWrapper>
      <InputWrapper>
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
      </InputWrapper>
    </FormWrapper>
  );
};
