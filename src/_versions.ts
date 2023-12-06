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
    versionDate: '2023-12-06T22:09:45.588Z',
    gitCommitHash: '7ba9978',
    versionLong: '0.1.0-7ba9978',
};
export default versions;
