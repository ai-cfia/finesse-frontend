import { fireEvent, render, screen } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import { setupTestEnvVars } from "../../setupTests";
import CFIALogo from "./CFIALogo";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("CFIALogo", () => {
  beforeAll(() => {
    setupTestEnvVars();
  });

  it('calls useNavigate with "/" when the logo is clicked and current path is different', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
    (useLocation as jest.Mock).mockImplementation(() => ({
      pathname: "/some-other-path",
    }));
    render(<CFIALogo />);
    const logoLink = screen.getByTestId("cfia-logo");
    fireEvent.click(logoLink);
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it('does not call useNavigate when the logo is clicked and current path is "/"', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
    (useLocation as jest.Mock).mockImplementation(() => ({ pathname: "/" }));
    render(<CFIALogo />);
    const logoLink = screen.getByTestId("cfia-logo");
    fireEvent.click(logoLink);
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
