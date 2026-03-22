import { Context } from "../imports/Context";
import { GraphMetadataBuilder } from "./GraphMetadataBuilder";

export class GraphMetadata {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    create(builder: GraphMetadataBuilder): string {
        return "";
    }
    createFromJson(graphJson: string): string {
        return "";
    }
    deleteGraph(): void {
        
    }
    get(): string {
        return "";
    }
    getConnectedTableList(table: string, includeInbound: boolean, candidateTables: Array<string>): Array<string> {
        return [];
    }
    getEdgeList(tables: Array<string>, includeEdgesForTablesOutsideGraph: boolean): Array<any> {
        return [];
    }
    static getExcludedTables(): string[] {
        return [];
    }
    getForTables(tables: string[], depth: number, includeTableExtensions: boolean): string {
        return "";
    }
    saveEdge(edgeFromClient: string): boolean {
        return false;
    }
    saveNode(nodeFromClient: string): boolean {
        return false;
    }
    update(builder: GraphMetadataBuilder): string {
        return "";
    }
    updateFromJson(graphJson: string): string {
        return "";
    }
}
