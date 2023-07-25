import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Reducer,
} from "react";

// Define the type for the state
export interface State {
  term: string | null;
  // Define other state properties if needed
}

// Define the initial state
export const initialState: State = {
  term: null,
  // Initialize other state properties here if needed
};

// Define the type for the action
export interface Action {
  type: string;
  term?: string;
  // Define other action properties if needed
}

// Define action types as constants
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  // Add other action types as needed
};

// Creating Context
export interface StateContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const StateContext = createContext<StateContextValue | undefined>(
  undefined,
);

// Creating State Provider
interface StateProviderProps {
  reducer: Reducer<State, Action>;
  initialState: State;
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: StateContextValue = { state, dispatch };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// Creating custom hook for using the state
export const useStateValue = (): StateContextValue => {
  const context = useContext(StateContext);

  if (context == null) {
    throw new Error("useStateValue must be used within a StateProvider");
  }

  return context;
};
