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
    versionDate: '2023-12-04T18:23:32.498Z',
    gitCommitHash: '872070a',
    versionLong: '0.2.0-872070a',
};
export default versions;
