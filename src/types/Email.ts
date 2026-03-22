import { NativeArray } from "../imports/NativeArray";

export class Email {
    to: NativeArray = null as any;
    cc: NativeArray = null as any;
    bcc: NativeArray = null as any;
    headers: Record<any, any> = null as any;
    subject: string = "";
    text: string = "";
    html: string = "";
    state: string = "";
    type: string = "";
    id: string = "";
}
