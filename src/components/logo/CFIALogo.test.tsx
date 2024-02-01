import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import CFIALogo from "./CFIALogo";
import { setupTestEnvVars } from "../../setupTests";
import { useLocation, useNavigate } from "react-router-dom";

// Mock the entire module
vi.mock("react-router-dom", () => {
  const originalModule = vi.importActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: vi.fn(),
    useLocation: vi.fn(() => ({
      pathname: '/',
      state: {},
      key: 'mockKey',
      search: '',
      hash: ''
    })),
  };
});

describe("CFIALogo", () => {
  // Setup the mock return values for useNavigate and useLocation
  const navigateMock = vi.fn();
  const locationMock = {
    pathname: '/',
    state: {},
    key: 'mockKey',
    search: '',
    hash: ''
  };

  beforeAll(() => {
    setupTestEnvVars();
  });

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(navigateMock);
    vi.mocked(useLocation).mockReturnValue(locationMock);
    navigateMock.mockClear();
  });

  it('calls useNavigate with "/" when the logo is clicked and current path is different', () => {
    locationMock.pathname = "/some-other-path";
    render(<CFIALogo />);
    const logoLink = screen.getByTestId("cfia-logo");
    fireEvent.click(logoLink);
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it('does not call useNavigate when the logo is clicked and current path is "/"', () => {
    locationMock.pathname = "/";
    render(<CFIALogo />);
    const logoLink = screen.getByTestId("cfia-logo");
    fireEvent.click(logoLink);
    expect(navigateMock).not.toHaveBeenCalled();
  });

});
