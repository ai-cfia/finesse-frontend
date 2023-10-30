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
    versionDate: '2023-10-30T12:58:41.635Z',
    gitCommitHash: 'a25c661',
    versionLong: '0.1.0-a25c661',
};
export default versions;
