import { createContext, useContext, useState, type ReactNode } from "react";
import { SearchSource, type QueryResult } from "../types";

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
const DataContext = createContext<DataContextState>({
  searchTerm: null,
  setSearchTerm: () => {},
  currentSearchSource: SearchSource.Simulated,
  setCurrentSearchSource: () => {},
  queryResult: [],
  setQueryResult: () => {},
});

// Create a provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [currentSearchSource, setCurrentSearchSource] = useState<SearchSource>(
    SearchSource.Simulated,
  );
  const [queryResult, setQueryResult] = useState<QueryResult[]>([]);

  return (
    <DataContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        currentSearchSource,
        setCurrentSearchSource,
        queryResult,
        setQueryResult,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the layout context
export const useData = (): DataContextState => {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("useDataFetch must be used within a DataFetchProvider");
  }
  return context;
};
