export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
}
export const versions: TsAppVersion = {
    version: '1.0.0',
    name: 'finesse-frontend',
    versionDate: '2024-02-01T08:57:03.572Z',
    gitCommitHash: '03e5cc4',
    versionLong: '1.0.0-03e5cc4',
}
export default versions
