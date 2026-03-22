export class ATFBreakpoint {
    static getMaximumPauseTime(): number {
        return 0;
    }
    static getPauseInfo(resultID?: string): any {
        return null as any;
    }
    static pauseTest(resultID?: string): void {
        
    }
    static shouldPauseAtStep(resultID?: string, stepID?: string): boolean {
        return false;
    }
    static stepHasBreakpointForCurrentUser(stepID?: string, checkForActive?: boolean): boolean {
        return false;
    }
    static stepOver(resultID?: string): void {
        
    }
    static unpauseTest(resultID?: string): void {
        
    }
}
