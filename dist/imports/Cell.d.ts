import { Image } from './Image.js';
import { Paragraph } from './Paragraph.js';
import { Style } from './Style.js';
import { Table } from './Table.js';
import { Color } from './Color.js';
export declare class Cell {
    constructor(rowspan?: number, colspan?: number);
    addImage(image?: Image): void;
    addParagraph(paragraph?: Paragraph): void;
    addStyle(style?: Style): void;
    addTable(table?: Table): void;
    getColumn(): number;
    getHeight(): number;
    getRow(): number;
    getWidth(): number;
    setBackGroundColor(color?: Color): void;
    setBorder(width?: number): void;
    setBorderBottom(width?: number): void;
    setBorderLeft(width?: number): void;
    setBorderRight(width?: number): void;
    setBorderTop(width?: number): void;
    setColoredBorder(color?: Color, width?: number): void;
    setColoredBorderBottom(width?: number, color?: Color): void;
    setColoredBorderLeft(width?: number, color?: Color): void;
    setColoredBorderRight(width?: number, color?: Color): void;
    setColoredBorderTop(width?: number, color?: Color): void;
    setHeight(height?: number): void;
    setHorizontalAlignment(alignment?: string): void;
    setMaxHeight(value?: number): void;
    setMaxWidth(value?: number): void;
    setMinHeight(value?: number): void;
    setMinWidth(value?: number): void;
    setOpacity(opacity?: number): void;
    setPadding(padding?: number): void;
    setPaddingBottom(padding?: number): void;
    setPaddingLeft(padding?: number): void;
    setPaddingRight(padding?: number): void;
    setPaddingTop(padding?: number): void;
    setRunDirection(direction?: string): void;
    setTextAlignment(alignment?: string): void;
    setVerticalAlignment(alignment?: string): void;
}
//# sourceMappingURL=Cell.d.ts.map