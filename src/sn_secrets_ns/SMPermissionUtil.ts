export class SMPermissionUtil {
    static isCKCMAllowed(): boolean {
        return false;
    }
    static isGranularSGAllowed(type?: string, parentModule?: string): boolean {
        return false;
    }
}
