export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.1.0',
    name: 'finesse-frontend',
    versionDate: '2023-12-01T18:55:08.171Z',
    gitCommitHash: 'fcab9a2',
    versionLong: '0.1.0-fcab9a2',
};
export default versions;
