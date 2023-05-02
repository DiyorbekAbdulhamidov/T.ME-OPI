export class BaseModel{
    private id : number = 0;

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }
}