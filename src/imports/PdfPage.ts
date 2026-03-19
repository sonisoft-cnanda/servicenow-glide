export class PdfPage {
    constructor(pageSize?: string, orientation?: string) {}
    getBottom(): number {
        return 0;
    }
    getLeft(): number {
        return 0;
    }
    getRight(): number {
        return 0;
    }
    getTop(): number {
        return 0;
    }
    getWidth(): number {
        return 0;
    }
    rotate(): PdfPage {
        return new PdfPage();
    }
}
