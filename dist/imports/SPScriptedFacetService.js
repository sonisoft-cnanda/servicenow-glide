"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPScriptedFacetService = void 0;
const SPScriptedFacet_1 = require("./SPScriptedFacet.js");
class SPScriptedFacetService {
    constructor() { }
    createFacet(label, id) {
        return new SPScriptedFacet_1.SPScriptedFacet();
    }
    createMultiChoiceFacet(label, id) {
        return new SPScriptedFacet_1.SPScriptedFacet();
    }
}
exports.SPScriptedFacetService = SPScriptedFacetService;
//# sourceMappingURL=SPScriptedFacetService.js.map