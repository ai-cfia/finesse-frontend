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
    version: '0.2.1',
    name: 'finesse-frontend',
    versionDate: '2024-05-05T02:23:14.004Z',
    gitCommitHash: 'd25d01e',
    versionLong: '0.2.1-d25d01e',
};
export default versions;
