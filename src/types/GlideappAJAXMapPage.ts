import { NativeObject } from "../imports/NativeObject";
import { AJAXMapItem } from "./AJAXMapItem";
import { AJAXMapLegendItem } from "./AJAXMapLegendItem";
import { GlideRecord } from "./GlideRecord";

export class GlideappAJAXMapPage {
    setTitle(title: string): void {
        
    }
    setSubtitle(subtitle: string): void {
        
    }
    setConfigurationRecord(table: string, sysId: string, query: string, view: string): void {
        
    }
    setCenter(latitude: number, longitude: number): void {
        
    }
    isNewSession(): boolean {
        return false;
    }
    isMobileSession(): boolean {
        return false;
    }
    getUserZoom(): number {
        return 0;
    }
    getCenter(): NativeObject {
        return null as any;
    }
    addLegendItem(title: string, iconUrl: string): AJAXMapLegendItem {
        return null as any;
    }
    addItem(gr: GlideRecord): AJAXMapItem {
        return null as any;
    }
}
