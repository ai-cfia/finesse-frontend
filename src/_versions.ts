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
    versionDate: '2023-11-29T18:56:04.753Z',
    gitCommitHash: 'aeb31b8',
    versionLong: '0.1.0-aeb31b8',
};
export default versions;
