import { ServiceRESTResponse } from "../sn_internal_services/ServiceRESTResponse";
import { GlideRecord } from "../types/GlideRecord";

export class TrainingRequest {
    constructor(solutionDefinition?: GlideRecord) {  }
    cancelTraining(solutionSysId?: string): ServiceRESTResponse {
        return null as any;
    }
    cancelUpdateJob(solutionSysId?: string): ServiceRESTResponse {
        return null as any;
    }
    getTrainingJobsState(origin?: string, lastTime?: string, solutionIds?: string): ServiceRESTResponse {
        return null as any;
    }
    isInstanceAutoTrainingEligible(): boolean {
        return false;
    }
    postServiceRequest(solutionSysId?: string, token?: string): ServiceRESTResponse {
        return null as any;
    }
    submitForTraining(solutionDefinitionSysID?: string): number {
        return 0;
    }
    updateInstanceAutoTrainEligibleInfo(): boolean {
        return false;
    }
}
