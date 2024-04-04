import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AlertProvider from "./contexts/AlertProvider";
import DataProvider from "./contexts/DataProvider";
import LayoutProvider from "./contexts/LayoutProvider";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";


function App(): JSX.Element {
  return (
    <BrowserRouter >
      <AlertProvider>
        <DataProvider>
          <LayoutProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </LayoutProvider>
        </DataProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
