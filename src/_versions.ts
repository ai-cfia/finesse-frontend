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
    versionDate: '2023-12-15T08:04:21.288Z',
    gitCommitHash: 'b9f0a66',
    versionLong: '0.2.2-b9f0a66',
};
export default versions;
