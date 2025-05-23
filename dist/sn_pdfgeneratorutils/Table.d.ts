import { Cell } from '../imports/Cell.js';
import { Style } from '../imports/Style.js';
import { Image } from '../imports/Image.js';
import { Paragraph } from '../imports/Paragraph.js';
import { Color } from '../imports/Color.js';
export declare class Table {
    constructor(ltr?: boolean, columnWidths?: number[], largeTable?: boolean);
    addCell(cell?: Cell): void;
    addCellWithStyle(cell?: Cell, style?: Style): void;
    addHeaderCell(cell?: Cell): void;
    addImageCell(image?: Image): void;
    addParagraphCell(p?: Paragraph): void;
    addTextCell(text?: string): void;
    complete(): void;
    donotSplitRowOnPageBreak(value?: boolean): void;
    flush(): void;
    getDefaultStyle(): Style;
    getDefaultbackGroundColor(): Color;
    getHeaderStyle(): Style;
    setBackGroundColor(color?: Color): void;
    setBorder(width?: number): void;
    setDefaultStyle(defaultStyle?: Style): void;
    setDefaultbackGroundColor(color?: Color): void;
    setFixedPosition(pageNumber?: number, left?: number, bottom?: number, width?: number): void;
    setHeaderStyle(headerStyle?: Style): void;
    setHorizontalAlignment(alignment?: string): void;
    setKeepTogether(val?: boolean): void;
    setMargin(margin?: number): void;
    setMarginBottom(margin?: number): void;
    setMarginLeft(margin?: number): void;
    setMarginRight(margin?: number): void;
    setMarginTop(margin?: number): void;
    setRunDirection(direction?: string): void;
    setSkipFirstHeader(skipFirstHeader?: boolean): void;
    setWidth(width?: number): void;
    useAllAvailableWidth(): void;
}
//# sourceMappingURL=Table.d.ts.map