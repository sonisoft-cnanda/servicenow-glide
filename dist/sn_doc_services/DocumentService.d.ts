import { SystemDocument } from '../imports/SystemDocument.js';
import { JSONObject } from '../imports/JSONObject.js';
export declare class DocumentService {
    constructor();
    createDocument(document?: SystemDocument): JSONObject;
    deleteDocument(documentSysId?: string): JSONObject;
    updateDocument(documentSysId?: string, document?: SystemDocument): JSONObject;
}
//# sourceMappingURL=DocumentService.d.ts.map