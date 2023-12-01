import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { environment } from "./environments/environment";

describe("App Component Tests", () => {
  test("version matches the environment version", () => {
    const { container } = render(<App basename="/" />);
    const versionElement = screen.getByText("v" + environment.version);
    expect(versionElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("debug button is visible when debug mode is true", () => {
    process.env.REACT_APP_DEBUG_MODE = "True";
    const { container } = render(<App basename="/" />);
    const debugButton = screen.getByTestId("debug-button");
    expect(debugButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("debug button is not visible when debug mode is false", () => {
    process.env.REACT_APP_DEBUG_MODE = "False";
    const { container } = render(<App basename="/" />);
    const debugButton = screen.queryByTestId("debug-button");
    expect(debugButton).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("debug panel toggles visibility when debug button is clicked", () => {
    process.env.REACT_APP_DEBUG_MODE = "True";
    const { container } = render(<App basename="/" />);
    const debugButton = screen.getByTestId("debug-button");
    expect(debugButton).toBeInTheDocument();

    // Initially, the debug panel should not be visible
    expect(screen.queryByTestId("debug-panel")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();

    // Simulate a click on the debug button
    fireEvent.click(debugButton);
    expect(screen.getByTestId("debug-panel")).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    // Simulate another click to toggle the panel off
    fireEvent.click(debugButton);
    expect(screen.queryByTestId("debug-panel")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
