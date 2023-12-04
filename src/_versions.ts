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
    version: '0.2.0',
    name: 'finesse-frontend',
    versionDate: '2023-12-04T21:25:19.734Z',
    gitCommitHash: '1b203ac',
    versionLong: '0.2.0-1b203ac',
};
export default versions;
