export enum SearchSource {
  Simulated = "static",
  Ailab = "ailab",
  Azure = "azure",
}

export enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

export interface QueryResult {
  id: string;
  url: string;
  title: string;
  content: string;
}
