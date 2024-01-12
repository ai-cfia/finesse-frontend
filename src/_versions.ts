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
    versionDate: '2024-01-12T18:16:45.032Z',
    gitCommitHash: '7b3faaf',
    versionLong: '0.2.5-7b3faaf',
};
export default versions;
