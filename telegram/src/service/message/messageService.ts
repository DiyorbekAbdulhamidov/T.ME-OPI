import { User } from "../../model/user";
import { BaseModel } from "../../model/baseModel";
import { Message } from "../../model/messega";
import { BaseService } from "../baseService";

export interface MessageService extends BaseService{
  getByUserIdAndReceiverId(userId: number, receiverId: number): Message[];
}

export const messages: Message[] = [];
