import { Message } from "../../model/messega";
import { messages } from "./messageService";
import { BaseModel } from "../../model/baseModel";


export class MessageService {
    private id: number = 0;

    create(message: Message) {
        message.setId(this.id++);
        messages.push(message);
        return true;
    }

    getById(id: number) {
        for (let message of messages) {
            if (message.getId() == id) {
                return message;
            }
        }
        return null;
    }

    updateById(uptade: Message) {
        let i: number = 0;

        for (let message of messages) {
            if (message.getId() === uptade.getId()) {
                messages[i] = uptade;
                return uptade
            }
            i++;
        }
        return null;
    }

    delateById(id: number): boolean {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].getId() === id) {
                messages.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    getByUserIdAndReceiverId(userId: number, receiverId: number){
        let chatMessages:Message[] = [];
        for(let message of messages){
            if(message.getFromId() === userId && message.getToId() === receiverId){
                chatMessages.push(message);
            }
            else if(message.getFromId() === receiverId && message.getToId() === userId){
                chatMessages.push(message);
            }
        }
        return chatMessages;
    }

    // chats(userId: number){
    //     let userChats : Message[] = [];
      
    //     for (const message of messages) {
    //       if (message.getFromId() === userId) {
    //         userChats.push(message.getToId());
    //       } else if (message.getToId() === userId) {
    //         userChats.push(message.getFromId());
    //       }
    //     }
      
    //     return userChats;
    //   }
    
    chats(userId: number){
        let userChats : Set<number> = new Set<number>();
        
        for (const message of messages) {
          if (message.getFromId() === userId) {
            userChats.add(message.getToId());
          } else if (message.getToId() === userId) {
            userChats.add(message.getFromId());
          }
        }
        
        return userChats;
      }
      
      
    
}
