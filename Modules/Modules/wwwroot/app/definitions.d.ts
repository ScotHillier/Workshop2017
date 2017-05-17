declare module "person" {
    export class Person {
        constructor(fn: string, ln: string);
        speak(): string;
    }
}

declare module "customer" {
    export class Customer {
        constructor(firstName: string, lastName: string, title: string, company: string, email: string);
        talk(): string;
    }
}

