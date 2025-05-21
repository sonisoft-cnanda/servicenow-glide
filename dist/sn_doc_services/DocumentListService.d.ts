import { SystemDocumentList } from '../imports/SystemDocumentList.js';
import { JSONObject } from '../imports/JSONObject.js';
export declare class DocumentListService {
    constructor();
    createDocumentList(list?: SystemDocumentList): JSONObject;
    createDocumentsFromList(listSysId?: string, tableName?: string, tableSysId?: string): JSONObject;
    deleteDocumentList(listSysId?: string): JSONObject;
    updateDocumentList(listSysId?: string, list?: SystemDocumentList): JSONObject;
}
//# sourceMappingURL=DocumentListService.d.ts.map