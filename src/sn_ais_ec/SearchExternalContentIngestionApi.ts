import { NativeArray } from "../imports/NativeArray";
import { GlideScriptableInputStream } from "../types/GlideScriptableInputStream";
import { ExternalContentAisIngestionResponse } from "./ExternalContentAisIngestionResponse";
import { ExternalContentAisUserPrincipalImportResponse } from "./ExternalContentAisUserPrincipalImportResponse";

export class SearchExternalContentIngestionApi {
    constructor() {  }
    deleteByQuery(tableName?: string, query?: string): string {
        return "";
    }
    flushAllIdleBuffers(): void {
        
    }
    flushIngestion(batcherID?: string): string {
        return "";
    }
    getMaxFileSize(): number {
        return 0;
    }
    getSupportedFileExtensions(): NativeArray {
        return null as any;
    }
    importUserPrincipalStream(tableName?: string, userPrincipalImports?: GlideScriptableInputStream): ExternalContentAisUserPrincipalImportResponse {
        return null as any;
    }
    importUserPrincipals(tableName?: string, userPrincipalImports?: Array<any>): ExternalContentAisUserPrincipalImportResponse {
        return null as any;
    }
    ingestDocument(tableName?: string, externalDocumentId?: string, metadata?: Record<any, any>, contentPointer?: string, batcherID?: string): boolean {
        return false;
    }
    ingestDocumentStream(tableName?: string, documents?: GlideScriptableInputStream): ExternalContentAisIngestionResponse {
        return null as any;
    }
    ingestDocumentWithPrincipal(tableName?: string, externalDocumentId?: string, metadata?: Record<any, any>, contentPointer?: string, batcherID?: string, principals?: Record<any, any>): boolean {
        return false;
    }
    ingestDocuments(tableName?: string, documents?: Array<any>): ExternalContentAisIngestionResponse {
        return null as any;
    }
    initBatcher(size?: number): string {
        return "";
    }
    isAISAvailableForIngestion(): boolean {
        return false;
    }
    purgeAllDocuments(tableName?: string): string {
        return "";
    }
    purgeAllUserPrincipals(tableName?: string): void {
        
    }
    releaseBatcher(batcherID?: string): void {
        
    }
    removeDocument(tableName?: string, externalDocumentId?: string): boolean {
        return false;
    }
    removeUserPrincipal(tableName?: string, userPrincipalId?: string): void {
        
    }
    storeContent(stream?: GlideScriptableInputStream): string {
        return "";
    }
    updateByQuery(tableName?: string, query?: string, metadata?: Record<any, any>): string {
        return "";
    }
}
