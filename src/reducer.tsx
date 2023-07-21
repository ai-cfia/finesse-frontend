import { type Reducer } from "react"; // Import Reducer type
import { type State, type Action } from "./StateProvider"; // Import State and Action types from the correct file

// Define action types as constants
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  // Add other action types as needed
};

// Define the initial state
export const initialState: State = {
  term: null,
  // Initialize other state properties here if needed
};

// Define the reducer function
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term ?? null,
      };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default reducer; // Export the reducer
