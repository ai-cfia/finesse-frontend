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
    version: '0.2.2',
    name: 'finesse-frontend',
    versionDate: '2023-12-14T10:10:26.754Z',
    gitCommitHash: '93e9f5d',
    versionLong: '0.2.2-93e9f5d',
};
export default versions;
