// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

export const setupTestEnvVars = (): void => {
  process.env.REACT_APP_BACKEND_URL = "backend";
  process.env.REACT_APP_BASENAME = "/";
  process.env.REACT_APP_DEBUG_MODE = "True";
  process.env.REACT_APP_GITHUB_API_URL = "github";
};
