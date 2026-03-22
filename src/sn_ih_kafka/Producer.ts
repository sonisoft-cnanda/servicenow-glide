export class Producer {
    constructor() {  }
    send(topic?: string, key?: string, message?: string, isSync?: boolean): boolean {
        return false;
    }
}
