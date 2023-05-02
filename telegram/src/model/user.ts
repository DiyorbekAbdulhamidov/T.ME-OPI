export class User{
    constructor(public phoneNumber: string, public username: string, public smsCode: number){};

    getPhoneNumber(){
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber : string){
        this.phoneNumber = phoneNumber;
    }

    getUserName(){
        return this.username;
    }

    setUserName(username : string){
        this.username = username;
    }

    getSmsCode(){
        return this.smsCode
    }

    setSmsCode(smsCode : number){
        this.smsCode = smsCode;
    }
}