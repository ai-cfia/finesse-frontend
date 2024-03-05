import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { config } from "../../config";
import DataProvider from "../../contexts/DataProvider";
import LayoutProvider from "../../contexts/LayoutProvider";
import { setupTestEnvVars } from "../../setupTests";
import { DebugPanel } from "./DebugPanel";

vi.mock("react-router-dom", async () => {
  const originalModule = await vi.importActual("react-router-dom"); // Use async import if necessary
  return {
    ...originalModule,
    useNavigate: () => vi.fn(),
    // Ensure BrowserRouter is correctly exported if not automatically included
    BrowserRouter: originalModule.BrowserRouter,
  };
});

vi.mock("../../api/useApiUtil", () => ({
  fetchFilenames: async () =>
    await Promise.resolve(["file1", "file2", "file3"]),
}));

vi.mock("../../contexts/LayoutProvider", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("../../contexts/layoutContext", () => ({
  useLayout: () => ({ isDebugPanelVisible: true }),
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
      </BrowserRouter>
    );
    return screen.getByTestId("debug-panel");
  };
  const originalEnv = process.env;

  beforeAll(() => {
    setupTestEnvVars();
    window.alert = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
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

    await waitFor(() => {
      fireEvent.click(simulatedRadioButton);
      expect(screen.getByText("file1")).toBeInTheDocument();
      expect(view).toMatchSnapshot();
    });
  });

  test("clicking on a filename button updates the search term", async () => {
    const view = renderDebugPanel();

    expect(screen.queryByText("file1")).not.toBeInTheDocument();

    const simulatedRadioButton = screen.getByLabelText("Use Simulated Data");

    await waitFor(async () => {
      fireEvent.click(simulatedRadioButton);
      const firstFilenameButton = await screen.findByText("file1");
      fireEvent.click(firstFilenameButton);
      expect(window.alert).toHaveBeenCalledWith(
        "Search query set successfully!"
      );
      expect(view).toMatchSnapshot();
    });
  });

  test('selects the "AI Lab" radio button when VITE_SEARCH_SOURCE is ailab', async () => {
    config.searchSource = "ailab";
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

  test('selects the "Azure AI" radio button when VITE_SEARCH_SOURCE is azure', async () => {
    config.searchSource = "azure";
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

  test('selects the "Simulated Data" radio button when VITE_SEARCH_SOURCE is static', async () => {
    config.searchSource = "static";
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

  test("no radio button is selected when VITE_SEARCH_SOURCE has a bad value", async () => {
    config.searchSource = "bad";
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
