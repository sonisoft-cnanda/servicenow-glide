import { JSONObject } from './JSONObject';
import { SystemDocumentVersion } from './SystemDocumentVersion';

export class DocumentVersionService {
    constructor() {}
    createDocVersionFromTemplateDoc(templateDocumentSysId?: string, docSysId?: string): JSONObject {
        return new JSONObject();
    }
    createDocumentVersion(version?: SystemDocumentVersion): JSONObject {
        return new JSONObject();
    }
    deleteDocumentVersion(documentVersionSysId?: string): JSONObject {
        return new JSONObject();
    }
}
