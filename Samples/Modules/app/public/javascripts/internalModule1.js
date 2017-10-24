var App = window.Namespace || {};

App.internalModule1 = function () {

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

    return {
        person: person
    };

}();

