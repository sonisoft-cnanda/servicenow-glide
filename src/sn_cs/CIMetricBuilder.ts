import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { CIMetric } from "./CIMetric";

export class CIMetricBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    build(): CIMetric {
        return null as any;
    }
    withConversationId(conversation?: string): CIMetricBuilder {
        return null as any;
    }
    withDocumentId(documentId?: string): CIMetricBuilder {
        return null as any;
    }
    withDocumentRef(documentRef?: string): CIMetricBuilder {
        return null as any;
    }
    withGroupId(groupId?: string): CIMetricBuilder {
        return null as any;
    }
    withGroupType(groupType?: string): CIMetricBuilder {
        return null as any;
    }
    withMetric(key?: string, value?: string): CIMetricBuilder {
        return null as any;
    }
}
