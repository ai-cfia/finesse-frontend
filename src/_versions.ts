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
    version: '0.2.5',
    name: 'finesse-frontend',
    versionDate: '2024-01-31T17:37:48.282Z',
    gitCommitHash: 'ec15666',
    versionLong: '0.2.5-ec15666',
};
export default versions;
