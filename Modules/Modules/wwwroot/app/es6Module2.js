export function Customer (fn, ln, t, c, e) {

    "use strict";

    class person {

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        speak() {
            return `My name is ${this.firstName} ${this.lastName}.`;
        }
    }

    class customer extends person {

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

    return new customer(fn, ln, t, c, e);

};



