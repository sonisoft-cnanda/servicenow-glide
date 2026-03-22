export class SncIPAddress {
    constructor(asString: string);
    constructor(address: string, ...notations: any[]);
    constructor(...args: any[]) {  }
    static get(ipOrHost: string): SncIPAddress {
        return null as any;
    }
    static getString(ipOrHost: string): string {
        return "";
    }
}
