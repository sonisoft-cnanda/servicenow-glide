import { ParameterBag } from "./ParameterBag";

export class ParameterBagEntry {
    canEdit(): boolean {
        return false;
    }
    getBag(): ParameterBag {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
    isOptional(): boolean {
        return false;
    }
    isVisible(): boolean {
        return false;
    }
    remove(): void {
        
    }
    requiresSubstitutions(): boolean {
        return false;
    }
    setOptional(arg0: boolean): ParameterBagEntry {
        return null as any;
    }
    setSubstitutionsFlag(arg0: boolean): ParameterBagEntry {
        return null as any;
    }
    setValue(arg0: string): ParameterBagEntry {
        return null as any;
    }
    setVisible(arg0: boolean): ParameterBagEntry {
        return null as any;
    }
    tryToResolveSubstitutions(): any {
        return null as any;
    }
}
