import { ActionTypes, SearchSource, type Action, type State } from "./types";

export const initialState: State = {
  term: null,
  currentSearchSource: SearchSource.Ailab,
  queryResults: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SetSearchTerm:
      return { ...state, term: action.payload };
    case ActionTypes.SetSearchSource:
      return { ...state, currentSearchSource: action.payload };
    case ActionTypes.SetQueryResults:
      return { ...state, queryResults: action.payload };
    default:
      return state;
  }
}
