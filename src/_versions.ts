export interface TsAppVersion {
  version: string;
  name: string;
  description?: string;
  versionLong?: string;
  versionDate: string;
  gitCommitHash?: string;
  gitCommitDate?: string;
  gitTag?: string;
}
export const versions: TsAppVersion = {
  version: "1.0.1",
  name: "finesse-frontend",
  versionDate: "2024-03-05T19:33:37.837Z",
  gitCommitHash: "2250ca1",
  versionLong: "1.0.1-2250ca1",
};
export default versions;
