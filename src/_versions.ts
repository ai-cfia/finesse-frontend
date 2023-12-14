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
    version: '0.2.0',
    name: 'finesse-frontend',
    versionDate: '2023-12-14T10:04:44.964Z',
    gitCommitHash: '89ce1ee',
    versionLong: '0.2.0-89ce1ee',
};
export default versions;
