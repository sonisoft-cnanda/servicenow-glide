import { Table } from "./Table";
import { PdfPage } from "./PdfPage";
import { Image } from "./Image";
import { Paragraph } from "./Paragraph";

export class Document {
    constructor(os?: any, pageSize?: PdfPage) {  }
    addAndStartNewPage(): void {
        
    }
    addAuthor(author?: string): void {
        
    }
    addEvent(event?: string, eventHandler?: any): void {
        
    }
    addImage(image?: Image): void {
        
    }
    addLink(url?: string, label?: string): void {
        
    }
    addNewLine(): void {
        
    }
    addNewPage(): void {
        
    }
    addNewPageAtIndex(index?: number): void {
        
    }
    addParagraph(paragraph?: Paragraph): void {
        
    }
    addTable(table?: Table): void {
        
    }
    close(): void {
        
    }
    static createDocument(pageSize?: PdfPage): Document {
        return null as any;
    }
    getPageCount(): number {
        return 0;
    }
    getPageSize(): PdfPage {
        return null as any;
    }
    initializeDocument(os?: any, pageSize?: PdfPage): void {
        
    }
    isClosed(): boolean {
        return false;
    }
    saveAsAttachment(tableName?: string, tableSysId?: string, fileName?: string): string {
        return "";
    }
    setBaseDirection(direction?: string): void {
        
    }
    setMargins(topMargin?: number, rightMargin?: number, bottomMargin?: number, leftMargin?: number): void {
        
    }
}
