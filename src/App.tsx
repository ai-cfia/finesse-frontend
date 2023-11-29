// App.tsx
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { StateProvider } from "./StateProvider";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";

const basename = process.env.REACT_APP_BASENAME ?? "/";

function App(): JSX.Element {
  return (
    <BrowserRouter basename={basename}>
      <StateProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
