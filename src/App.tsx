// App.tsx
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer"; // Import the reducer
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const basename = process.env.REACT_APP_BASENAME ?? "/";

function App(): JSX.Element {
  console.log("Basename:", basename);
  return (
    <BrowserRouter basename="/finesse-frontend">
      <StateProvider reducer={reducer} initialState={initialState}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
