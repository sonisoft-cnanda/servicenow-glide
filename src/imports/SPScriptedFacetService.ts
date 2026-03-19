import { SPScriptedFacet } from './SPScriptedFacet';

export class SPScriptedFacetService {
    constructor() {}
    createFacet(label?: string, id?: string): SPScriptedFacet {
        return new SPScriptedFacet();
    }
    createMultiChoiceFacet(label?: string, id?: string): SPScriptedFacet {
        return new SPScriptedFacet();
    }
}
