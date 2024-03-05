import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { config } from "./config";
import AlertProvider from "./contexts/AlertProvider";
import DataProvider from "./contexts/DataProvider";
import LayoutProvider from "./contexts/LayoutProvider";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";

interface AppProps {
  basename?: string;
}

function App({ basename = config.basename ?? "/" }: AppProps): JSX.Element {
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
