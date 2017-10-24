var App = window.App || {};

App.internalModule2 = function () {

    "use strict";

    class customer extends App.internalModule1.person {

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

    return {
        customer: customer
    };

}();

