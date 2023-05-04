import { User } from "../../model/user";
import { BaseModel } from "../../model/baseModel";
import {BaseService} from "../../service/baseService";

export class UserService extends BaseService{
    users: User[] = [];
    
    setSmsCode(smsCode: number, phoneNumber: string);
    signIn(phoneNumber: string, smsCode: number);
    searchByName(name :string): User;
}

