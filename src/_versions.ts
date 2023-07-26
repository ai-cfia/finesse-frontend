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
    versionDate: '2023-07-25T18:09:32.706Z',
    gitCommitHash: 'ee795e6',
    versionLong: '0.1.0-ee795e6',
};
export default versions;
