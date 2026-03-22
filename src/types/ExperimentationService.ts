import { ExperimentContext } from "./ExperimentContext";
import { FeedBackResponse } from "./FeedBackResponse";

export class ExperimentationService {
    static clearCache(experimentParameterName: string): void {
        
    }
    static getContext(experimentParameterName: string, fallbackVariantValue: string): ExperimentContext {
        return null as any;
    }
    static recordFeedback(experimentParameterName: string, feedbackMap: Record<string, string>): FeedBackResponse {
        return null as any;
    }
    static toExpObject(json: string): any {
        return null as any;
    }
}
