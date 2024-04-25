import { render, screen, waitFor } from "@testing-library/react";
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

  it("renders radio buttons for search sources", async () => {
    const view = renderDebugPanel();
    await waitFor(() => {
      const radioButtons = screen.queryAllByRole("radio");
      expect(radioButtons.length).toBe(2);
    });
    expect(view).toMatchSnapshot();
  });


  it('selects the "Azure AI" radio button when VITE_SEARCH_SOURCE is azure', async () => {
    config.searchSource = "azure";
    const view = renderDebugPanel();
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const llamaindexRadioButton = screen.getByTestId(
      "search-source-llamaindex"
    );
    expect(azureRadioButton).toBeInTheDocument();
    expect(llamaindexRadioButton).toBeInTheDocument();
    expect(azureRadioButton).toBeChecked();
    expect(llamaindexRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });

  it('selects the "AI Lab LlamaIndex" radio button when VITE_SEARCH_SOURCE is llamaindex', async () => {
    config.searchSource = "llamaindex";
    const view = renderDebugPanel();
    const azureRadioButton = screen.getByTestId("search-source-azure");
    const llamaindexRadioButton = screen.getByTestId(
      "search-source-llamaindex"
    );
    expect(azureRadioButton).toBeInTheDocument();
    expect(llamaindexRadioButton).toBeInTheDocument();
    expect(azureRadioButton).not.toBeChecked();
    expect(llamaindexRadioButton).toBeChecked();
    expect(view).toMatchSnapshot();
  });

  it("selects no radio button when VITE_SEARCH_SOURCE has a bad value", async () => {
    config.searchSource = "bad";
    const view = renderDebugPanel();
    const azureRadioButton = screen.getByTestId("search-source-azure");
    expect(azureRadioButton).not.toBeChecked();
    expect(view).toMatchSnapshot();
  });
});
