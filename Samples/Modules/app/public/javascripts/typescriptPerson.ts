export class Person {

    private firstName: string;
    private lastName: string;

    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }

    speak() {
        return `My name is ${this.firstName} ${this.lastName} `;
    }
}
