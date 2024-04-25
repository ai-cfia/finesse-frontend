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
    version: '0.1.1',
    name: 'finesse-frontend',
    versionDate: '2024-04-25T17:55:32.296Z',
    gitCommitHash: 'b5dcd6d',
    versionLong: '0.1.1-b5dcd6d',
};
export default versions;
