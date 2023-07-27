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
    versionDate: '2023-07-27T16:23:00.981Z',
    gitCommitHash: '76d4347',
    versionLong: '0.1.0-76d4347',
};
export default versions;
