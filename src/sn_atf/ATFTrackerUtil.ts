export class ATFTrackerUtil {
    static batchTrackerReceivesCancelRequest(batchTrackerId?: string): boolean {
        return false;
    }
    static cancelTracker(trackerId?: string): boolean {
        return false;
    }
    static cancelTrackerIfIncomplete(trackerId?: string): boolean {
        return false;
    }
    static drainMetadataQueue(testResultId?: string): void {
        
    }
    static failTracker(trackerId?: string): boolean {
        return false;
    }
    static reportStepProgress(batchTrackerId?: string, nextStep?: number, totalSteps?: number): boolean {
        return false;
    }
    static successTracker(trackerId?: string): boolean {
        return false;
    }
    static successWithWarningsTracker(trackerId?: string): boolean {
        return false;
    }
}
