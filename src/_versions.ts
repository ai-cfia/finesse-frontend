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
    versionDate: '2023-12-15T08:18:06.344Z',
    gitCommitHash: '078c521',
    versionLong: '0.2.4-078c521',
};
export default versions;
