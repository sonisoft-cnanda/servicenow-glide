import { ScriptableRequestAuthCredential } from '../imports/ScriptableRequestAuthCredential.js';
import { ScriptableStandardCredential } from '../imports/ScriptableStandardCredential.js';
export declare class StandardCredentialsProvider {
    constructor();
    getAuthCredentialByID(id?: string): ScriptableRequestAuthCredential;
    getCredentialByAliasID(aliasId?: string): ScriptableStandardCredential;
    getCredentialByID(id?: string): ScriptableStandardCredential;
    getCredentials(types?: Array<any>, credentialTag?: string): Array<any>;
}
//# sourceMappingURL=StandardCredentialsProvider.d.ts.map