import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VADataTransformUtils {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static fromAddress(address?: string): string {
        return "";
    }
    static fromAddressLocation(txtAddress?: string, geoString?: string): any {
        return null as any;
    }
    static fromGeo(geoString?: string): any {
        return null as any;
    }
    static toAddress(address?: any): string {
        return "";
    }
    static toGeo(address?: any): string {
        return "";
    }
    static toNewAddress(deliveryAddress?: string, latStr?: string, lngStr?: string): any {
        return null as any;
    }
}
