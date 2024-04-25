import { render, screen } from "@testing-library/react";
import App from "./App";
import { environment } from "./environments/environment";
import { setupTestEnvVars } from "./setupTests";

describe("App Component", () => {
  beforeAll(() => {
    setupTestEnvVars();
  });

  it("displays the version that matches the environment version", () => {
    const { asFragment } = render(<App />);
    expect(screen.getByText("Alpha Version v" + environment.version)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
