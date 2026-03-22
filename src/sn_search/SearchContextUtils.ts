export class SearchContextUtils {
    constructor() {  }
    static getReferenceAttributes(): Array<any> {
        return [];
    }
    getUserContext(userSysId?: string): Record<any, any> {
        return {} as any;
    }
    static isReferenceAttribute(attrName?: string): boolean {
        return false;
    }
    static isSysUserDotwalkFieldValid(field?: string): boolean {
        return false;
    }
}
