import { Style } from '../imports/Style.js';
import { Text } from '../imports/Text.js';
import { PdfFont } from '../imports/PdfFont.js';
export declare class Paragraph {
    constructor(text?: string);
    addNewLine(): void;
    addParagraph(content?: Paragraph): void;
    addString(content?: string): void;
    addStyle(style?: Style): void;
    addText(text?: Text): void;
    setFixedPosition(left?: number, bottom?: number, width?: number): void;
    setFont(font?: PdfFont): void;
    setHorizontalAlignment(alignment?: string): void;
    setMargin(margin?: number): void;
    setMarginBottom(margin?: number): void;
    setMarginLeft(margin?: number): void;
    setMarginRight(margin?: number): void;
    setMarginTop(margin?: number): void;
    setMargins(marginTop?: number, marginRight?: number, marginBottom?: number, marginLeft?: number): void;
    setTextAlignment(alignment?: string): void;
    setVerticalAlignment(alignment?: string): void;
}
//# sourceMappingURL=Paragraph.d.ts.map