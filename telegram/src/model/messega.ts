import { BaseModel } from "./baseModel";

export class Message extends BaseModel {
    constructor(public text: string, public fromId: number, public toId: number) {
        const id = 0;
        super(id);
    }

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    getFromId() {
        return this.fromId;
    }

    setFromId(fromId: number) {
        this.fromId = fromId;
    }

    getToId() {
        return this.toId;
    }

    setToId(toId: number) {
        this.toId = toId;
    }
} 
