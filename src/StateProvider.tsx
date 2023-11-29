import type { ReactNode } from "react";
import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import type { Action, State } from "./types";

interface StateProviderProps {
  children: ReactNode;
}

export interface StateContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const StateContext = createContext<StateContextValue | undefined>(
  undefined,
);

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for using the state and dispatch
export const useStateValue = (): StateContextValue => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
