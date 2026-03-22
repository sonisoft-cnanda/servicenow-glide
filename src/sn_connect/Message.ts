import { Conversation } from "./Conversation";
import { User } from "./User";

export class Message {
    constructor() {  }
    getBody(): string {
        return "";
    }
    getConversation(): Conversation {
        return null as any;
    }
    getField(): string {
        return "";
    }
    getSender(): User {
        return null as any;
    }
    getSysID(): string {
        return "";
    }
    getType(): string {
        return "";
    }
}
