import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  type RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { config } from "../../config";
import DataProvider from "../../contexts/DataProvider";
import LayoutProvider from "../../contexts/LayoutProvider";
import { setupTestEnvVars } from "../../setupTests";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  beforeAll(() => {
    setupTestEnvVars();
  });

  const renderSearchPage = (): RenderResult => {
    return render(
      <BrowserRouter>
        <DataProvider>
          <LayoutProvider>
            <SearchPage />
          </LayoutProvider>
        </DataProvider>
      </BrowserRouter>
    );
  };

  it("shows the debug button when VITE_DEBUG_MODE is true", () => {
    config.debugMode = true;
    const { asFragment } = renderSearchPage();
    expect(screen.getByTestId("debug-button")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not show the debug button when VITE_DEBUG_MODE is false", () => {
    config.debugMode = false;
    const { asFragment } = renderSearchPage();
    expect(screen.queryByTestId("debug-button")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("toggles the debug panel when the debug button is clicked", () => {
    config.debugMode = true;
    const { asFragment } = renderSearchPage();
    fireEvent.click(screen.getByTestId("debug-button"));
    expect(screen.getByTestId("debug-panel")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(screen.getByTestId("debug-button"));
    expect(screen.queryByTestId("debug-panel")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
