import { Findings } from "./Findings";
import { RhinoNode } from "../sn_parser/RhinoNode";
import { Statistics } from "./Statistics";

export class InstanceScanEngine {
    statistics: Statistics = null as any;
    finding: Findings = null as any;
    columnValue: string = "";
    rootNode: RhinoNode = null as any;
    isCustomizedBaseSystemRecord: boolean = false;
    current: any = null as any;
}
