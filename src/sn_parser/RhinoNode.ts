type ScriptableRhinoNodeCallback = {};
export class RhinoNode {
    constructor() {  }
    compareTo(other?: RhinoNode): number {
        return 0;
    }
    debugPrint(): string {
        return "";
    }
    getAbsolutePosition(): number {
        return 0;
    }
    getColumnNo(): number {
        return 0;
    }
    getLineNo(): number {
        return 0;
    }
    getNameIdentifier(): string {
        return "";
    }
    getParent(): RhinoNode {
        return null as any;
    }
    getRootNode(): RhinoNode {
        return null as any;
    }
    getTypeName(): string {
        return "";
    }
    toSource(): string {
        return "";
    }
    visit(callbackFunction?: ScriptableRhinoNodeCallback): void {
        
    }
}
