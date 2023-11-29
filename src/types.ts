export enum ActionTypes {
  SetSearchTerm = "SET_SEARCH_TERM",
  SetSearchSource = "SET_SEARCH_SOURCE",
  SetQueryResults = "SET_SEARCH_RESULTS",
}

export enum SearchSources {
  Simulated = "simulated",
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
  currentSearchSource: SearchSources;
  queryResults: QueryResult[];
}

export type Action =
  | { type: ActionTypes.SetSearchTerm; payload: string | null }
  | { type: ActionTypes.SetSearchSource; payload: SearchSources }
  | { type: ActionTypes.SetQueryResults; payload: QueryResult[] };
