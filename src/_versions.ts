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
    version: '0.1.1',
    name: 'finesse-frontend',
    versionDate: '2023-11-06T17:26:41.959Z',
    gitCommitHash: '499e4ad',
    versionLong: '0.1.0-499e4ad',
};
export default versions;
