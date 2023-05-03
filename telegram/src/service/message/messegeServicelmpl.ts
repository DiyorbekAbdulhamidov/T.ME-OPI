import { Message } from "../../model/messega";
import { messages } from "./messageService";
import { BaseModel } from "../../model/baseModel";

export class MessageService{
    private id: number = 0;

    create(messege : Message){
        messege.setToId(this.id++);
        messages.push(messege);
        return true;
    }

    
}