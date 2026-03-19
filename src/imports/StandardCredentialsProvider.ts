import { ScriptableRequestAuthCredential } from './ScriptableRequestAuthCredential';
import { ScriptableStandardCredential } from './ScriptableStandardCredential';

export class StandardCredentialsProvider {
    constructor() {}
    getAuthCredentialByID(id?: string): ScriptableRequestAuthCredential {
        return new ScriptableRequestAuthCredential();
    }
    getCredentialByAliasID(aliasId?: string): ScriptableStandardCredential {
        return new ScriptableStandardCredential();
    }
    getCredentialByID(id?: string): ScriptableStandardCredential {
        return new ScriptableStandardCredential();
    }
    getCredentials(types?: Array<any>, credentialTag?: string): Array<any> {
        return new Array();
    }
}
