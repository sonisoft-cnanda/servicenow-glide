import { Context } from './Context';
import { Function } from './Function';

export class JSONStreamingAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    close(): void {
        
    }
    disablePrettyPrint(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    enablePrettyPrint(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    endArray(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    endObject(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    getAttachmentId(): string {
        return "";
    }
    getJSONString(): string {
        return "";
    }
    startArray(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    startArrayField(fieldName?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    startObject(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeBoolean(value?: boolean): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeBooleanField(fieldName?: string, value?: boolean): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeFieldName(value?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeNull(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeNullField(fieldName?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeNumberField(fieldName?: string, encodedValue?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeRaw(value?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeString(value?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    writeStringField(fieldName?: string, value?: string): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
}
