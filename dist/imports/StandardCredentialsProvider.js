"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardCredentialsProvider = void 0;
const ScriptableRequestAuthCredential_1 = require("./ScriptableRequestAuthCredential.js");
const ScriptableStandardCredential_1 = require("./ScriptableStandardCredential.js");
class StandardCredentialsProvider {
    constructor() { }
    getAuthCredentialByID(id) {
        return new ScriptableRequestAuthCredential_1.ScriptableRequestAuthCredential();
    }
    getCredentialByAliasID(aliasId) {
        return new ScriptableStandardCredential_1.ScriptableStandardCredential();
    }
    getCredentialByID(id) {
        return new ScriptableStandardCredential_1.ScriptableStandardCredential();
    }
    getCredentials(types, credentialTag) {
        return new Array();
    }
}
exports.StandardCredentialsProvider = StandardCredentialsProvider;
//# sourceMappingURL=StandardCredentialsProvider.js.map