System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = /** @class */ (function () {
                function Person(fn, ln) {
                    this.firstName = fn;
                    this.lastName = ln;
                }
                Person.prototype.speak = function () {
                    return "My name is " + this.firstName + " " + this.lastName + " ";
                };
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
//# sourceMappingURL=typescriptPerson.js.map