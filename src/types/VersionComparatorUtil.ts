export class VersionComparatorUtil {
    static compare(version: string, availableVersion: string): number {
        return 0;
    }
    static isDowngrade(currentVersion: string, targetVersion: string): boolean {
        return false;
    }
    static isEqual(currentVersion: string, targetVersion: string): boolean {
        return false;
    }
    static isUpgrade(currentVersion: string, targetVersion: string): boolean {
        return false;
    }
}
