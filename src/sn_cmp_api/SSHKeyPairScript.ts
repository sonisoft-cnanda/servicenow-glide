export class SSHKeyPairScript {
    constructor() {  }
    associateToNode(nodeCredSysId?: string, nodeSysId?: string, sshKey?: string, orchCredSysId?: string, credentialAlias?: string): void {
        
    }
    associateToNodeCredential(nodeCredSysId?: string, nodeSysId?: string, credentialType?: string, sshKey?: string, orchCredSysId?: string, credentialAlias?: string): void {
        
    }
    createNodeUserCredential(nodeId?: string, userName?: string, password?: string, nodeSysId?: string, sshKey?: string, orchCredSysId?: string, credentialAlias?: string): string {
        return "";
    }
    decryptAndDeleteSSHKey(keyName?: string): string {
        return "";
    }
    deleteNodeCredentials(nodeSysId?: string): boolean {
        return false;
    }
    deleteSSHKey(keyName?: string): void {
        
    }
    generateKeyPair(keyPairName?: string): void {
        
    }
    generateManagementKeyPair(): void {
        
    }
    getDecryptedSSHKey(keyName?: string): string {
        return "";
    }
}
