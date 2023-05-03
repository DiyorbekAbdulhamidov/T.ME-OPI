export class BaseModel{
    constructor(public id: number){}

    // private id : number = 0;

    getId(): number{
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }
}