define(["require", "exports", "requireModule1"], function (require, exports, module1) {

    var Customer = (function () {

        function Customer(firstName, lastName, title, company, email) {
            this.person = new module1.Person(firstName, lastName);
            this.title = title;
            this.company = company;
            this.email = email;
        }

        Customer.prototype.talk = function () {
            return this.person.speak() + " I work for " + this.company;
        };

        return Customer;

    })();

    exports.Customer = Customer;
});
