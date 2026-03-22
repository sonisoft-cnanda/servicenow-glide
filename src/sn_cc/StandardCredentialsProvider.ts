import { StandardCredential } from "./StandardCredential";
import { AuthCredential } from "../sn_auth/AuthCredential";

export class StandardCredentialsProvider {
    constructor() {  }
    getAuthCredentialByID(id?: string): AuthCredential {
        return null as any;
    }
    getCredentialByAliasID(aliasId?: string): StandardCredential {
        return null as any;
    }
    getCredentialByID(id?: string): StandardCredential {
        return null as any;
    }
    getCredentials(types?: Array<any>, credentialTag?: string): Array<any> {
        return [];
    }
}
