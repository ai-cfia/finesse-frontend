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
    versionDate: '2023-12-04T15:12:22.123Z',
    gitCommitHash: '7dcfb51',
    versionLong: '0.1.0-7dcfb51',
};
export default versions;
