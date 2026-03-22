import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class EdgeBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    description(description?: string): EdgeBuilder {
        return null as any;
    }
    label(label?: string): EdgeBuilder {
        return null as any;
    }
    mappingTable(mappingTable?: string): EdgeBuilder {
        return null as any;
    }
    passthruToEdge(targetEdgeType?: string): EdgeBuilder {
        return null as any;
    }
    sourceKeyColumn(sourceKeyColumn?: string): EdgeBuilder {
        return null as any;
    }
    sourceNode(nodeType?: string): EdgeBuilder {
        return null as any;
    }
    targetKeyColumn(targetKeyColumn?: string): EdgeBuilder {
        return null as any;
    }
    targetNode(nodeType?: string): EdgeBuilder {
        return null as any;
    }
}
