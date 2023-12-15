import { render, screen } from "@testing-library/react";
import App from "./App";
import { environment } from "./environments/environment";

describe("App Component", () => {
  // Set up environment variable before tests
  beforeEach(() => {
    process.env.REACT_APP_DEBUG_MODE = "True";
  });

  it("displays the version that matches the environment version", () => {
    const { asFragment } = render(<App basename="/" />);
    expect(screen.getByText("v" + environment.version)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
