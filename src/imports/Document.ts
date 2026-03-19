import { IEventHandler } from './IEventHandler';
import { Image } from './Image';
import { Paragraph } from './Paragraph';
import { Table } from './Table';
import { PdfPage } from './PdfPage';
import { OutputStream } from './OutputStream';

export class Document {
    constructor(os?: any, pageSize?: PdfPage) {}
    addAndStartNewPage(): void {
        
    }
    addAuthor(author?: string): void {
        
    }
    addEvent(event?: string, eventHandler?: IEventHandler): void {
        
    }
    addImage(image?: Image): void {
        
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
    createDocument(pageSize?: PdfPage): Document {
        return new Document();
    }
    getPageCount(): number {
        return 0;
    }
    getPageSize(): PdfPage {
        return new PdfPage();
    }
    initializeDocument(os?: OutputStream, pageSize?: PdfPage): void {
        
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
