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
    versionDate: '2023-12-01T07:49:55.843Z',
    gitCommitHash: 'f0db6e8',
    versionLong: '0.1.0-f0db6e8',
};
export default versions;
