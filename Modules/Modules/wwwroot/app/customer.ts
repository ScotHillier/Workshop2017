import {Person} from 'person'
export class Customer extends Person {

    private title: string;
    private company: string;
    private email: string;

    constructor(firstName, lastName, title, company, email) {
        super(firstName, lastName)
        this.title = title;
        this.company = company;
        this.email = email;
    }

    talk() {
        return `${super.speak()} I work for ${this.company}.`;
    }
}
