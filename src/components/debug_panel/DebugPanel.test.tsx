import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "../../contexts/DataContext";
import { LayoutProvider } from "../../contexts/LayoutContext";
import { DebugPanel } from "./DebugPanel";

jest.mock("../../api/useApiUtil", () => ({
  fetchFilenames: async () =>
    await Promise.resolve(["file1", "file2", "file3"]),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../contexts/LayoutContext", () => ({
  useLayout: () => ({ isDebugPanelVisible: true }),
  LayoutProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("DebugPanel Component Tests", () => {
  const renderDebugPanel = (): HTMLElement => {
    render(
      <BrowserRouter>
        <DataProvider>
          <LayoutProvider>
            <DebugPanel />
          </LayoutProvider>
        </DataProvider>
      </BrowserRouter>,
    );
    return screen.getByTestId("debug-panel");
  };
  const originalEnv = process.env;

  beforeAll(() => {
    jest.resetModules();
    process.env.REACT_APP_BASENAME = "finesse-frontend";
    process.env.REACT_APP_DEBUG_MODE = "true";
    process.env.REACT_APP_SEARCH_SOURCE = "ailab";
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test("renders radio buttons for search sources", async () => {
    const view = renderDebugPanel();
    await waitFor(() => {
      const radioButtons = screen.queryAllByRole("radio");
      expect(radioButtons.length).toBe(3);
    });
    expect(view).toMatchSnapshot();
  });

  test("can switch to simulated data and display filenames", async () => {
    const view = renderDebugPanel();

    expect(screen.queryByText("file1")).not.toBeInTheDocument();
    expect(screen.queryByText("file2")).not.toBeInTheDocument();
    expect(screen.queryByText("file3")).not.toBeInTheDocument();

    const simulatedRadioButton = screen.getByLabelText("Use Simulated Data");
    fireEvent.click(simulatedRadioButton);

    await waitFor(() => {
      expect(screen.getByText("file1")).toBeInTheDocument();
    });
    expect(view).toMatchSnapshot();
  });

  test("clicking on a filename button updates the search term", async () => {
    const view = renderDebugPanel();

    expect(screen.queryByText("file1")).not.toBeInTheDocument();

    const simulatedRadioButton = screen.getByLabelText("Use Simulated Data");
    fireEvent.click(simulatedRadioButton);

    const firstFilenameButton = await screen.findByText("file1");
    fireEvent.click(firstFilenameButton);
    expect(window.alert).toHaveBeenCalledWith("Search query set successfully!");

    expect(view).toMatchSnapshot();
  });

  test('selects the "AI Lab" radio button when REACT_APP_SEARCH_SOURCE is ailab', async () => {
    process.env.REACT_APP_SEARCH_SOURCE = "ailab";
    const view = renderDebugPanel();
    const ailabRadioButton = screen.getByTestId("search-source-ailab");
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const staticRadioButton = screen.getByTestId("search-source-static");
    expect(ailabRadioButton).toBeInTheDocument();
    expect(azureRadioButton).toBeInTheDocument();
    expect(staticRadioButton).toBeInTheDocument();
    expect(ailabRadioButton).toBeChecked();
    expect(azureRadioButton).not.toBeChecked();
    expect(staticRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });

  test('selects the "Azure AI" radio button when REACT_APP_SEARCH_SOURCE is azure', async () => {
    process.env.REACT_APP_SEARCH_SOURCE = "azure";
    const view = renderDebugPanel();
    const ailabRadioButton = screen.getByTestId("search-source-ailab");
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const staticRadioButton = screen.getByTestId("search-source-static");
    expect(ailabRadioButton).toBeInTheDocument();
    expect(azureRadioButton).toBeInTheDocument();
    expect(staticRadioButton).toBeInTheDocument();
    expect(azureRadioButton).toBeChecked();
    expect(ailabRadioButton).not.toBeChecked();
    expect(staticRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });

  test('selects the "Simulated Data" radio button when REACT_APP_SEARCH_SOURCE is static', async () => {
    process.env.REACT_APP_SEARCH_SOURCE = "static";
    const view = renderDebugPanel();
    const ailabRadioButton = screen.getByTestId("search-source-ailab");
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const staticRadioButton = screen.getByTestId("search-source-static");
    expect(ailabRadioButton).toBeInTheDocument();
    expect(azureRadioButton).toBeInTheDocument();
    expect(staticRadioButton).toBeInTheDocument();
    expect(staticRadioButton).toBeChecked();
    expect(ailabRadioButton).not.toBeChecked();
    expect(azureRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });

  test("no radio button is selected when REACT_APP_SEARCH_SOURCE has a bad value", async () => {
    process.env.REACT_APP_SEARCH_SOURCE = "badvalue";
    const view = renderDebugPanel();
    const ailabRadioButton = screen.getByTestId("search-source-ailab");
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const staticRadioButton = screen.getByTestId("search-source-static");
    expect(ailabRadioButton).not.toBeChecked();
    expect(azureRadioButton).not.toBeChecked();
    expect(staticRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });
});
