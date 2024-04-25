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
    version: '0.2.0',
    name: 'finesse-frontend',
    versionDate: '2024-04-25T19:54:38.490Z',
    gitCommitHash: '855274d',
    versionLong: '0.2.0-855274d',
};
export default versions;
