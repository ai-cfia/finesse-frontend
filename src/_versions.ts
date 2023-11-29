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
    versionDate: '2023-11-29T17:31:26.237Z',
    gitCommitHash: '4d56d03',
    versionLong: '0.1.0-4d56d03',
};
export default versions;
