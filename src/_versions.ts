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
    name: 'louis-finesse',
    versionDate: '2023-10-23T15:10:05.957Z',
    gitCommitHash: '23ecae9',
    versionLong: '0.1.0-23ecae9',
};
export default versions;
