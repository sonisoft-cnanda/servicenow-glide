import { GlideSysListControl } from './GlideSysListControl';
import { ViewManager } from './ViewManager';
import { SysListControl } from './SysListControl';

export class GlideRenderProperties {
    constructor() {}
    genEmptyForm(): boolean {
        return false;
    }
    getDeferInlineScripts(): boolean {
        return false;
    }
    getEncodedQuery(): string {
        return "";
    }
    getGaugeHeight(): number {
        return 0;
    }
    getGaugeId(): string {
        return "";
    }
    getGaugeName(): string {
        return "";
    }
    getGaugeType(): string {
        return "";
    }
    getGaugeWidth(): number {
        return 0;
    }
    getListControl(): GlideSysListControl {
        return new GlideSysListControl();
    }
    getMedia(): string {
        return "";
    }
    getParameterValue(name?: string): string {
        return "";
    }
    getParameters(): Record<any, any> {
        return {};
    }
    getQueryNoDomain(): boolean {
        return false;
    }
    getReferringURL(): string {
        return "";
    }
    getViewID(): string {
        return "";
    }
    getViewManager(): ViewManager {
        return new ViewManager();
    }
    getViewName(): string {
        return "";
    }
    getWindowID(): string {
        return "";
    }
    getWindowProperties(): Record<any, any> {
        return {};
    }
    isChartDetailOnReport(): boolean {
        return false;
    }
    isDefaultList(): boolean {
        return false;
    }
    isDialog(): boolean {
        return false;
    }
    isHomePage(): boolean {
        return false;
    }
    isInDevStudio(): boolean {
        return false;
    }
    isInlinePopup(): boolean {
        return false;
    }
    isInteractive(): boolean {
        return false;
    }
    isMaintainOrder(): boolean {
        return false;
    }
    isManyToMany(): boolean {
        return false;
    }
    isMultipleUpdate(): boolean {
        return false;
    }
    isOneToMany(): boolean {
        return false;
    }
    isPopup(): boolean {
        return false;
    }
    isPortal(): boolean {
        return false;
    }
    isPreview(): boolean {
        return false;
    }
    isPrint(): boolean {
        return false;
    }
    isReadOnly(): boolean {
        return false;
    }
    isRelatedList(): boolean {
        return false;
    }
    isSearch(): boolean {
        return false;
    }
    isSmallCaption(): boolean {
        return false;
    }
    setDeferInlineScripts(value?: boolean): void {
        
    }
    setDialog(dialog?: boolean): void {
        
    }
    setInlinePopup(inlinePopup?: boolean): void {
        
    }
    setListControl(listControl?: SysListControl): void {
        
    }
    setMedia(media?: string): void {
        
    }
    setPrint(b?: boolean): void {
        
    }
    setReadOnly(b?: boolean): void {
        
    }
    setSmallCaption(smallCaption?: boolean): void {
        
    }
    setView(viewName?: string, startingViewName?: string): void {
        
    }
    toString(): string {
        return "";
    }
    useRelatedRecordManager(type?: string): boolean {
        return false;
    }
    useSlushbucket(type?: string): boolean {
        return false;
    }
}
