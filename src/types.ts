export enum SearchSource {
  Simulated = "static",
  Ailab = "ailab",
  Azure = "azure",
}

export interface QueryResult {
  id: string;
  url: string;
  title: string;
  content: string;
}
