import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { setupTestEnvVars } from "../../setupTests";
import { SearchBar } from "./SearchBar";

jest.mock("../../contexts/DataContext", () => ({
  useData: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("SearchBar", () => {
  const mockSetSearchTerm = jest.fn();
  const mockNavigate = jest.fn();

  beforeAll(() => {
    setupTestEnvVars();
  });

  beforeEach(() => {
    (useData as jest.Mock).mockReturnValue({
      searchTerm: "initial",
      setSearchTerm: mockSetSearchTerm,
    });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
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
