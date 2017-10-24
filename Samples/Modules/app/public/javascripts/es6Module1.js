export function Person (fn, ln) {

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

    return new person(fn, ln);

};

