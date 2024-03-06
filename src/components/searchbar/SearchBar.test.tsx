import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { useData } from "../../contexts/dataContext";
import { setupTestEnvVars } from "../../setupTests";
import { SearchSource } from "../../types";
import { SearchBar } from "./SearchBar";

vi.mock("../../contexts/dataContext", () => ({
  useData: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("SearchBar", () => {
  const mockSetSearchTerm = vi.fn();
  const mockNavigate = vi.fn();

  const dataContextMock = {
    searchTerm: "initial",
    setSearchTerm: mockSetSearchTerm,
    currentSearchSource: SearchSource.ailab,
    setCurrentSearchSource: vi.fn(),
    queryResult: [],
    setQueryResult: vi.fn(),
  };

  beforeAll(() => {
    setupTestEnvVars();
  });

  beforeEach(() => {
    vi.mocked(useData).mockReturnValue(dataContextMock);
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly", () => {
    const { asFragment } = render(<SearchBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("updates input value on change", () => {
    const { asFragment } = render(<SearchBar />);
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "test query" } });
    expect(asFragment()).toMatchSnapshot();
  });

  it("trims search query and navigates on valid form submit", () => {
    const { asFragment } = render(<SearchBar />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("submit-button");
    fireEvent.change(input, { target: { value: "  test query  " } });
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not navigate or set search term with empty trimmed query", () => {
    const { asFragment } = render(<SearchBar />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("submit-button");
    fireEvent.change(input, { target: { value: "     " } });
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it("keeps the search query in the input after submission", () => {
    const { asFragment } = render(<SearchBar />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("submit-button");
    fireEvent.change(input, { target: { value: "test query" } });
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
});
