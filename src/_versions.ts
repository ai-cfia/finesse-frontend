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
  version: "1.0.0",
  name: "finesse-frontend",
  versionDate: "2024-02-28T16:55:33.131Z",
  gitCommitHash: "de301f1",
  versionLong: "1.0.0-de301f1",
};
export default versions;
