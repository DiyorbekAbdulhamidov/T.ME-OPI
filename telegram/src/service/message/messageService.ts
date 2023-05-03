import { User } from "../../model/user";
import { BaseModel } from "../../model/baseModel";
import { Message } from "../../model/messega";

export interface MessageService extends BaseModel{
  getByUserIdAndReceiverId(userId: number, receiverId: number): Message[];
}

export const messages: Message[] = [];