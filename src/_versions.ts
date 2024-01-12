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
    version: '0.2.6',
    name: 'finesse-frontend',
    versionDate: '2024-01-12T19:47:59.588Z',
    gitCommitHash: 'cc4d393',
    versionLong: '0.2.6-cc4d393',
};
export default versions;
