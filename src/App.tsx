import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AlertProvider } from "./contexts/AlertContext";
import { DataProvider } from "./contexts/DataContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";

interface AppProps {
  basename?: string;
}

function App({
  basename = process.env.REACT_APP_BASENAME ?? "/",
}: AppProps): JSX.Element {
  return (
    <BrowserRouter basename={basename}>
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
