export interface IContact {
    id: number;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
}
export declare class Contact implements IContact {
    constructor(id: number, lastName: string, firstName: string, phone: string, email: string);
    id: number;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
}
