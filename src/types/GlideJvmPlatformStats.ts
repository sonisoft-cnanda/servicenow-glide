import { ClassLoadingStats } from "../imports/ClassLoadingStats";
import { GcStats } from "../imports/GcStats";
import { MemoryStats } from "../imports/MemoryStats";

export class GlideJvmPlatformStats {
    memoryStats: MemoryStats = null as any;
    cpuTime: number = 0;
    cpuLoad: number = 0;
    classLoadingStats: ClassLoadingStats = null as any;
    javaOpts: string = "";
    gcStats: Array<GcStats> = null as any;
}
