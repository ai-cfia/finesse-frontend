export enum ActionTypes {
  SetSearchTerm = "SET_SEARCH_TERM",
  SetSearchSource = "SET_SEARCH_SOURCE",
  SetQueryResults = "SET_SEARCH_RESULTS",
  SetError = "SET_ERROR",
  ToggleDebugPanel = "TOGGLE_DEBUG_PANEL",
}

export enum SearchSource {
  Simulated = "static",
  Ailab = "ailab",
  Azure = "azure",
}

export interface QueryResult {
  id: string;
  url: string;
  title: string;
  content: string;
}

export interface State {
  term: string | null;
  currentSearchSource: SearchSource;
  queryResults: QueryResult[];
  error: string | null;
  debugPanelIsVisible: boolean;
}

export type Action =
  | { type: ActionTypes.SetSearchTerm; payload: string | null }
  | { type: ActionTypes.SetSearchSource; payload: SearchSource }
  | { type: ActionTypes.SetQueryResults; payload: QueryResult[] }
  | { type: ActionTypes.SetError; payload: string | null }
  | { type: ActionTypes.ToggleDebugPanel };
