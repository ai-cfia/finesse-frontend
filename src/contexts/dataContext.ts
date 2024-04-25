import { createContext, useContext } from "react";
import { QueryResult, SearchSource } from "../types";

// Define the type for your context state
interface DataContextState {
  searchTerm: string | null;
  setSearchTerm: React.Dispatch<React.SetStateAction<string | null>>;
  currentSearchSource: SearchSource;
  setCurrentSearchSource: React.Dispatch<React.SetStateAction<SearchSource>>;
  queryResult: QueryResult[];
  setQueryResult: React.Dispatch<React.SetStateAction<QueryResult[]>>;
}

// Create the context with a default value
export const DataContext = createContext<DataContextState>({
  searchTerm: null,
  setSearchTerm: () => {},
  currentSearchSource: SearchSource.azure,
  setCurrentSearchSource: () => {},
  queryResult: [],
  setQueryResult: () => {},
});

// Custom hook to use the layout context
export const useData = (): DataContextState => {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("useDataFetch must be used within a DataFetchProvider");
  }
  return context;
};
