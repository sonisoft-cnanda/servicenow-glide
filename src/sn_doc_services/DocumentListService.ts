import { SystemDocumentList } from '../imports/SystemDocumentList';
import { JSONObject } from '../imports/JSONObject';

export class DocumentListService {
    constructor() {}
    createDocumentList(list?: SystemDocumentList): JSONObject {
        return new JSONObject();
    }
    createDocumentsFromList(listSysId?: string, tableName?: string, tableSysId?: string): JSONObject {
        return new JSONObject();
    }
    deleteDocumentList(listSysId?: string): JSONObject {
        return new JSONObject();
    }
    updateDocumentList(listSysId?: string, list?: SystemDocumentList): JSONObject {
        return new JSONObject();
    }
}
