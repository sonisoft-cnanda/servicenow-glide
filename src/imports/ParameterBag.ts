import { NativeArray } from "./NativeArray";
import { ParameterBagEntry } from "./ParameterBagEntry";

export class ParameterBag {
    compareWithPrevious(arg0: any): NativeArray {
        return null as any;
    }
    get(arg0: string): ParameterBagEntry {
        return null as any;
    }
    getOrCreate(arg0: string): ParameterBagEntry {
        return null as any;
    }
    getValueOrDefault(arg0: string, arg1: string): string {
        return "";
    }
    hasAnySubstitutions(): boolean {
        return false;
    }
    keys(): Array<string> {
        return [];
    }
    setValue(arg0: string, arg1: string): ParameterBagEntry {
        return null as any;
    }
}
