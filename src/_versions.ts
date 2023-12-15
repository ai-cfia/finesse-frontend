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
    version: '0.2.2',
    name: 'finesse-frontend',
    versionDate: '2023-12-15T01:27:34.856Z',
    gitCommitHash: 'f5e1687',
    versionLong: '0.2.2-f5e1687',
};
export default versions;
