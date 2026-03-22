import { GlideElementDescriptor } from "./GlideElementDescriptor";
import { GlideLRUCache } from "./GlideLRUCache";

export class GlideController {
    constructor() {  }
    static putGlobal(name: string, value: any): void {
        
    }
    static getGlobal(name: string): any {
        return null as any;
    }
    static exists(name: string): boolean {
        return false;
    }
    static getSandboxGlobal(name: string): any {
        return null as any;
    }
    static getCache(): GlideLRUCache {
        return null as any;
    }
    removeGlobal(name: string): void {
        
    }
    evaluateAsObject(expression: string): any;
    evaluateAsObject(expression: string, ed: GlideElementDescriptor): any;
    evaluateAsObject(...args: any[]): any {
        return null as any;
    }
}
