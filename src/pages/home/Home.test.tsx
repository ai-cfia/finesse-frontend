import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  type RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { config } from "../../config";
import { AlertProvider } from "../../contexts/AlertContext";
import { DataProvider } from "../../contexts/DataContext";
import { LayoutProvider } from "../../contexts/LayoutContext";
import { setupTestEnvVars } from "../../setupTests";
import Home from "./Home"; // Adjust the import path as needed.

vi.mock("../../api/useApiUtil", () => ({
  PingBackend: async () => await Promise.resolve("ok"),
}));

describe("Home", () => {
  const renderHomePage = (): RenderResult => {
    return render(
      <BrowserRouter>
        <AlertProvider>
          <DataProvider>
            <LayoutProvider>
              <Home />
            </LayoutProvider>
          </DataProvider>
        </AlertProvider>
      </BrowserRouter>
    );
  };

  beforeAll(() => {
    setupTestEnvVars();
  });

  it("renders the Home page correctly", () => {
    const { asFragment } = renderHomePage();
    expect(
      screen.getByText(/Empowering agency's users with precision search./)
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  describe("Environment variable REACT_APP_BACKEND_URL", () => {
    it("shows a warning message when REACT_APP_BACKEND_URL is not set", () => {
      config.backendUrl = "";
      renderHomePage();
      expect(
        screen.getByText(
          /Warning: Backend URL is not set, frontend is misconfigured./
        )
      ).toBeInTheDocument();
    });

    it("does not show a warning message when REACT_APP_BACKEND_URL is set", () => {
      config.backendUrl = "http://example.com";
      renderHomePage();
      expect(
        screen.queryByText(
          /Warning: Backend URL is not set, frontend is misconfigured./
        )
      ).not.toBeInTheDocument();
    });
  });

  describe("Debug functionalities", () => {
    it("shows the debug button when REACT_APP_DEBUG_MODE is true", () => {
      config.debugMode = true;
      const { asFragment } = renderHomePage();
      expect(screen.getByTestId("debug-button")).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it("does not show the debug button when REACT_APP_DEBUG_MODE is false", () => {
      config.debugMode = false;
      const { asFragment } = renderHomePage();
      expect(screen.queryByTestId("debug-button")).not.toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it("toggles the debug panel when the debug button is clicked", () => {
      config.debugMode = true;
      const { asFragment } = renderHomePage();
      fireEvent.click(screen.getByTestId("debug-button"));
      expect(screen.getByTestId("debug-panel")).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
      fireEvent.click(screen.getByTestId("debug-button"));
      expect(screen.queryByTestId("debug-panel")).not.toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
