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
    version: '0.2.3',
    name: 'finesse-frontend',
    versionDate: '2023-12-19T14:47:53.392Z',
    gitCommitHash: '9bc2395',
    versionLong: '0.2.3-9bc2395',
};
export default versions;
