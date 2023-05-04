import { User } from "../../model/user";
import { UserService } from "./userService";

export class UserServiceImpl extends UserService{
    users: User[] = [];    
}