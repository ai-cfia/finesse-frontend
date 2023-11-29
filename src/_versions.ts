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
    versionDate: '2023-11-29T22:05:47.907Z',
    gitCommitHash: 'bc39d25',
    versionLong: '0.1.0-bc39d25',
};
export default versions;
