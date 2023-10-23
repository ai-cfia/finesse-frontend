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
    versionDate: '2023-10-23T13:08:26.119Z',
    gitCommitHash: '9d3f0ff',
    versionLong: '0.1.0-9d3f0ff',
};
export default versions;
