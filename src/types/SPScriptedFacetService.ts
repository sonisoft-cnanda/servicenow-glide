import { SPScriptedFacet } from '../imports/SPScriptedFacet';

export class SPScriptedFacetService {
    constructor() {}
    createFacet(label?: string, id?: string): SPScriptedFacet {
        return new SPScriptedFacet();
    }
    createMultiChoiceFacet(label?: string, id?: string): SPScriptedFacet {
        return new SPScriptedFacet();
    }
}
