import { ExternalDocumentPrincipal } from "./ExternalDocumentPrincipal";

export class ExternalDocument {
    constructor() {  }
    addProperty(key?: string, value?: string): ExternalDocument {
        return null as any;
    }
    static create(documentId?: string, properties?: Record<any, any>, contentPointer?: string, principal?: ExternalDocumentPrincipal): ExternalDocument {
        return null as any;
    }
    getContentPointer(): string {
        return "";
    }
    getDocumentId(): string {
        return "";
    }
    getPrincipal(): ExternalDocumentPrincipal {
        return null as any;
    }
    getProperties(): Record<any, any> {
        return {} as any;
    }
    setContentPointer(contentPointer?: string): ExternalDocument {
        return null as any;
    }
    setDocumentId(documentId?: string): ExternalDocument {
        return null as any;
    }
    setPrincipal(principal?: ExternalDocumentPrincipal): ExternalDocument {
        return null as any;
    }
    setProperties(properties?: Record<any, any>): ExternalDocument {
        return null as any;
    }
}
