import { IEventHandler } from './IEventHandler.js';
import { Image } from './Image.js';
import { Paragraph } from './Paragraph.js';
import { Table } from './Table.js';
import { PdfPage } from './PdfPage.js';
import { OutputStream } from './OutputStream.js';
export declare class Document {
    constructor(os?: any, pageSize?: PdfPage);
    addAndStartNewPage(): void;
    addAuthor(author?: string): void;
    addEvent(event?: string, eventHandler?: IEventHandler): void;
    addImage(image?: Image): void;
    addNewLine(): void;
    addNewPage(): void;
    addNewPageAtIndex(index?: number): void;
    addParagraph(paragraph?: Paragraph): void;
    addTable(table?: Table): void;
    close(): void;
    createDocument(pageSize?: PdfPage): Document;
    getPageCount(): number;
    getPageSize(): PdfPage;
    initializeDocument(os?: OutputStream, pageSize?: PdfPage): void;
    isClosed(): boolean;
    saveAsAttachment(tableName?: string, tableSysId?: string, fileName?: string): string;
    setBaseDirection(direction?: string): void;
    setMargins(topMargin?: number, rightMargin?: number, bottomMargin?: number, leftMargin?: number): void;
}
//# sourceMappingURL=Document.d.ts.map