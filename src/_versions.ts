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
  version: "0.2.5",
  name: "finesse-frontend",
  versionDate: "2024-01-31T20:16:06.521Z",
  gitCommitHash: "19bd919",
  versionLong: "0.2.5-19bd919",
};
export default versions;
