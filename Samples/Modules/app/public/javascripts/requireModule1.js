define(["require", "exports"], function (require, exports) {

    var Person = (function () {

        function Person(fn, ln) {
            this.firstName = fn;
            this.lastName = ln;
        }

        Person.prototype.speak = function () {
            return "My name is " + this.firstName + " " + this.lastName + ".";
        };

        return Person;

    })();

    exports.Person = Person;
});
