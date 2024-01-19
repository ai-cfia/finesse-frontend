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
    versionDate: '2024-01-12T21:54:37.773Z',
    gitCommitHash: '908ef25',
    versionLong: '0.2.5-908ef25',
};
export default versions;
