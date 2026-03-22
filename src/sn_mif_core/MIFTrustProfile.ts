import { NativeObject } from '../imports/NativeObject'
import { NativeArray } from '../imports/NativeArray'

export class MIFTrustProfile {
    constructor() {  }
    applyTrustProfile(appId?: string): NativeObject {
        return null as any;
    }
    areAllProfileItemsManaged(appId?: string): boolean {
        return false;
    }
    deleteTrustProfileItems(appTrustProfileStr?: string): void {
        
    }
    insertTrustProfileItems(appTrustProfileStr?: string): NativeArray {
        return null as any;
    }
}
