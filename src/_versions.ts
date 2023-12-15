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
    version: '0.2.4',
    name: 'finesse-frontend',
    versionDate: '2023-12-15T08:28:47.563Z',
    gitCommitHash: 'd02d1bf',
    versionLong: '0.2.4-d02d1bf',
};
export default versions;
