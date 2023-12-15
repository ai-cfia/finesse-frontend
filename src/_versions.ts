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
    version: '0.2.3',
    name: 'finesse-frontend',
    versionDate: '2023-12-15T05:14:15.313Z',
    gitCommitHash: '346ed97',
    versionLong: '0.2.3-346ed97',
};
export default versions;
