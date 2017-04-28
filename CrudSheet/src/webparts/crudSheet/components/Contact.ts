export interface IContact{
    id:number;
    lastName:string;
    firstName:string;
    phone:string;
    email:string;
}

export class Contact implements IContact{
    
    constructor(id:number, lastName:string, firstName:string, phone:string, email:string){
        this.id=id;
        this.lastName=lastName;
        this.firstName=firstName;
        this.phone=phone;
        this.email=email;
    }

    public id:number;
    public lastName:string;
    public firstName:string;
    public phone:string;
    public email:string;

}