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
    versionDate: '2023-07-27T19:01:19.184Z',
    gitCommitHash: '4eed505',
    versionLong: '0.1.0-4eed505',
};
export default versions;
