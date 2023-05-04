export interface BaseService {
    create(t : any): number;
    getById(id: number)
    updateById(update : any)
    deleteById(id: number): number;
}