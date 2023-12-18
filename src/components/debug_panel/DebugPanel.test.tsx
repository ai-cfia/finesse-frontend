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

  beforeAll(() => {
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
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
});
