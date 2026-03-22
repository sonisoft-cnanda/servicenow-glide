import { Context } from "../imports/Context";
import { EdgeBuilder } from "./EdgeBuilder";
import { NodeBuilder } from "./NodeBuilder";

export class GraphMetadataBuilder {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    description(description: string): GraphMetadataBuilder {
        return null as any;
    }
    edge(edgeBuilder: EdgeBuilder): GraphMetadataBuilder {
        return null as any;
    }
    isDefault(isDefault: boolean): GraphMetadataBuilder {
        return null as any;
    }
    label(label: string): GraphMetadataBuilder {
        return null as any;
    }
    name(graphName: string): GraphMetadataBuilder {
        return null as any;
    }
    node(nodeBuilder: NodeBuilder): GraphMetadataBuilder {
        return null as any;
    }
    removeEdge(edgeType: string, sourceNode: string, targetNode: string): GraphMetadataBuilder {
        return null as any;
    }
    removeNode(nodeType: string): GraphMetadataBuilder {
        return null as any;
    }
}
