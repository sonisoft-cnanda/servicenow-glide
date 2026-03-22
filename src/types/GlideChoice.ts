export class GlideChoice {
    constructor(value: string, label: string);
    constructor(value: string, label: string, sysId: string);
    constructor(...args: any[]) {  }
    getLabel(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    setId(sysId: string): void {
        
    }
    getImage(): string {
        return "";
    }
    getSelected(): boolean {
        return false;
    }
    setLabel(label: string): void {
        
    }
    setValue(value: string): void {
        
    }
    setImage(image: string): void {
        
    }
    setSelected(selected: boolean): void {
        
    }
    setParameter(name: string, value: string): void {
        
    }
    getParameter(name: string): string {
        return "";
    }
    getParameters(): Record<string, string> {
        return {} as any;
    }
}
