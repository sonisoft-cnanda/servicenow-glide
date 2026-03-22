import { GlideElement } from "../types/GlideElement";
import { GlideRecord } from "../types/GlideRecord";

export class ChannelUserProfileUtils {
    constructor() {  }
    doesInteractionChangeTriggerProfileUpdate(current?: GlideRecord, previous?: GlideRecord): boolean {
        return false;
    }
    getUserElementForInteraction(interactionGR?: GlideRecord): GlideElement {
        return null as any;
    }
    updateInteractionFromUserProfile(interactionGR?: GlideRecord): void {
        
    }
    updateUserProfileForInteraction(interactionGR?: GlideRecord): void {
        
    }
    updateUserProfileFromChannelUserID(channelUserProfileGR?: GlideRecord): void {
        
    }
}
