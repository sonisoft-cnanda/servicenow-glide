import { JSONObject } from '../imports/JSONObject.js';
import { SystemDocumentVersion } from '../imports/SystemDocumentVersion.js';
export declare class DocumentVersionService {
    constructor();
    createDocVersionFromTemplateDoc(templateDocumentSysId?: string, docSysId?: string): JSONObject;
    createDocumentVersion(version?: SystemDocumentVersion): JSONObject;
    deleteDocumentVersion(documentVersionSysId?: string): JSONObject;
}
//# sourceMappingURL=DocumentVersionService.d.ts.map