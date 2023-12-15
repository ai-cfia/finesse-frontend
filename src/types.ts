export enum SearchSource {
  static = "static",
  ailab = "ailab",
  azure = "azure",
}

export interface QueryResult {
  id: string;
  url: string;
  title: string;
  content: string;
}
