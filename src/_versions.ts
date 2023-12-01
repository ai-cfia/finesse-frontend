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
    versionDate: '2023-12-01T19:33:27.600Z',
    gitCommitHash: '9fa6b15',
    versionLong: '0.1.0-9fa6b15',
};
export default versions;
