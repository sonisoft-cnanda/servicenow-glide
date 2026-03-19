export class Queue {
    constructor() {}
    get(queueId?: string): Queue {
        return new Queue();
    }
    join(initialQuestion?: string): Record<any, any> {
        return {};
    }
}
