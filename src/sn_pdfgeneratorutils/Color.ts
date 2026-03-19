export class Color {
    constructor(colors?: number[]) {}
    equals(color?: Color): boolean {
        return false;
    }
    getGrayColor(grayScale?: number): Color {
        return new Color();
    }
    getOpacity(): number {
        return 0;
    }
    getcolorValue(): number[] {
        return new Array();
    }
    setColorValue(value?: number[]): void {
        
    }
    setOpacity(opacity?: number): void {
        
    }
}
