export enum SearchSource {
  static = "static",
  ailab = "ailab",
  azure = "azure",
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

export type ResponseData = QueryResult[];
