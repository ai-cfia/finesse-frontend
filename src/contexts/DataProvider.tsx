import { useState, type ReactNode } from "react";
import { config } from "../config";
import { SearchSource, type QueryResult } from "../types";
import { DataContext } from "./dataContext";

// Create a provider component
const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const envSearchSource =
    config.searchSource?.toLowerCase() ?? SearchSource.azure;
  const [currentSearchSource, setCurrentSearchSource] = useState<SearchSource>(
    SearchSource[envSearchSource as keyof typeof SearchSource]
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

export default DataProvider;
