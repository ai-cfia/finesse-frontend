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
    versionDate: '2024-01-12T13:46:14.975Z',
    gitCommitHash: '5cc29f6',
    versionLong: '0.2.5-5cc29f6',
};
export default versions;
