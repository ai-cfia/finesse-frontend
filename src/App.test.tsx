import { render, screen } from "@testing-library/react";
import App from "./App";
import { environment } from "./environments/environment";

test("make sure the version matches", () => {
  render(<App basename="/" />);
  const linkElement = screen.getByText("v" + environment.version);
  expect(linkElement).toBeInTheDocument();
});
