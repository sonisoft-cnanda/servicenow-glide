import { SystemDocument } from './SystemDocument';
import { JSONObject } from './JSONObject';

export class DocumentService {
    constructor() {}
    createDocument(document?: SystemDocument): JSONObject {
        return new JSONObject();
    }
    deleteDocument(documentSysId?: string): JSONObject {
        return new JSONObject();
    }
    updateDocument(documentSysId?: string, document?: SystemDocument): JSONObject {
        return new JSONObject();
    }
}
