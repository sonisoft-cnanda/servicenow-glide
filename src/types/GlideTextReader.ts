import { GlideScriptableInputStream } from '../imports/GlideScriptableInputStream';

export class GlideTextReader {
    constructor(inputStream?: GlideScriptableInputStream, charsetName?: string) {}
    getEncoding(): string {
        return "";
    }
    readLine(): string {
        return "";
    }
}
