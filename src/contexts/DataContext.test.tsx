import { SearchSource } from "../types";
import { getDefaultSearchSource } from "./DataContext";

describe("getDefaultSearchSource", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return the correct SearchSource based on REACT_APP_SEARCH_SOURCE", () => {
    process.env.REACT_APP_SEARCH_SOURCE = "azure";
    expect(getDefaultSearchSource()).toBe(SearchSource.Azure);

    process.env.REACT_APP_SEARCH_SOURCE = "ailab";
    expect(getDefaultSearchSource()).toBe(SearchSource.Ailab);

    process.env.REACT_APP_SEARCH_SOURCE = "static";
    expect(getDefaultSearchSource()).toBe(SearchSource.Simulated);

    delete process.env.REACT_APP_SEARCH_SOURCE;
    expect(getDefaultSearchSource()).toBe(SearchSource.Azure);
  });

  it("should throw an exception for invalid REACT_APP_SEARCH_SOURCE value", () => {
    process.env.REACT_APP_SEARCH_SOURCE = "invalid_value";
    expect(() => getDefaultSearchSource()).toThrow(
      "Invalid search source: invalid_value",
    );
  });
});
