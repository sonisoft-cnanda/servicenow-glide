import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

export class TopicJS {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    canView(isMobile?: boolean): boolean {
        return false;
    }
    static clearCacheMetrics(): void {
        
    }
    static getBannerImage(topicId?: string): string {
        return "";
    }
    static getCacheMetrics(): Array<any> {
        return [];
    }
    getChildTopicIds(includeChildTopics?: boolean): Array<any> {
        return [];
    }
    getChildTopics(hideTopicsWithNoContent?: boolean, isMobile?: boolean, limit?: number, offset?: number): any {
        return null as any;
    }
    getContent(includeChildTopics?: boolean, limit?: number, isMobile?: boolean, excludeContent?: Array<string>, contentConfigId?: Array<string>): Array<any> {
        return [];
    }
    getContentByPopularity(includeChildTopics?: boolean, limit?: number, isMobile?: boolean, excludeContent?: Array<string>, contentConfigId?: Array<string>): Array<any> {
        return [];
    }
    getDescription(): string {
        return "";
    }
    static getIcon(topicId?: string): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getSiblingTopics(hideTopicsWithNoContent?: boolean, isMobile?: boolean, limit?: number, offset?: number): any {
        return null as any;
    }
    isActive(): boolean {
        return false;
    }
}
