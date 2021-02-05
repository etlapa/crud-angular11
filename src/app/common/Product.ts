import { IProduct } from "./IProduct";

export class Product implements IProduct{
    id: string;
    name: string;
    description: string;
    available: boolean;
    constructor(name?:string,descr?:string,available?:boolean){
        this.id = '';
        this.name = (name)?name:'';
        this.description = (descr)?descr:'';
        this.available = (available)?available:false;
    }
}