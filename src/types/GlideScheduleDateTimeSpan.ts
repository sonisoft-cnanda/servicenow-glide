import { GlideScheduleDateTime } from "./GlideScheduleDateTime";
import { GlideScheduleTimeSpan } from "./GlideScheduleTimeSpan";

export class GlideScheduleDateTimeSpan {
    constructor(start: GlideScheduleDateTime, end: GlideScheduleDateTime) {  }
    adjacentTo(o: any): number {
        return 0;
    }
    compareTo(o: any): number {
        return 0;
    }
    getActualEnd(): GlideScheduleDateTime {
        return null as any;
    }
    getActualStart(): GlideScheduleDateTime {
        return null as any;
    }
    getEnd(): GlideScheduleDateTime {
        return null as any;
    }
    getEndTimeSpan(): GlideScheduleTimeSpan {
        return null as any;
    }
    getOriginTimeSpan(): GlideScheduleTimeSpan {
        return null as any;
    }
    getStart(): GlideScheduleDateTime {
        return null as any;
    }
    getStartTimeSpan(): GlideScheduleTimeSpan {
        return null as any;
    }
    include(d: GlideScheduleDateTime): boolean {
        return false;
    }
    overlapWith(another: GlideScheduleDateTimeSpan): boolean {
        return false;
    }
    setEnd(sdt: GlideScheduleDateTime): void {
        
    }
    toString(): string {
        return "";
    }
}
