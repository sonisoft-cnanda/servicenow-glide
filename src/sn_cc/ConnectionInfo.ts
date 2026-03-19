import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { ScriptableStandardCredential } from '../imports/ScriptableStandardCredential';

export class ConnectionInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getAttribute(name?: string): string {
        return "";
    }
    getConnectionRetries(): number {
        return 0;
    }
    getConnectionTimeout(): number {
        return 0;
    }
    getCredential(): ScriptableStandardCredential {
        return new ScriptableStandardCredential();
    }
    getCredentialAttribute(name?: string): string {
        return "";
    }
    getDataMap(): Record<any, any> {
        return {};
    }
    getExtendedAttributes(): Record<any, any> {
        return {};
    }
    getHost(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getPort(): number {
        return 0;
    }
    getProtocol(): string {
        return "";
    }
}
