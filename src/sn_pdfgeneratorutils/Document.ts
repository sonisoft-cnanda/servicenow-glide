import { IEventHandler } from '../imports/IEventHandler';
import { Image } from '../imports/Image';
import { Paragraph } from '../imports/Paragraph';
import { Table } from '../imports/Table';
import { PdfPage } from '../imports/PdfPage';
import { OutputStream } from '../imports/OutputStream';

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
