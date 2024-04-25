export const config = {
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  debugMode: import.meta.env.VITE_DEBUG_MODE?.toLowerCase() === "true",
  githubApiUrl:
    import.meta.env.VITE_GITHUB_API_URL ||
    "https://api.github.com/repos/ai-cfia/finesse-data/contents",
  searchSource: import.meta.env.VITE_SEARCH_SOURCE || "azure",
};
