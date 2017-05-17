System.register(['person'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var person_1;
    var Customer;
    return {
        setters:[
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            Customer = (function (_super) {
                __extends(Customer, _super);
                function Customer(firstName, lastName, title, company, email) {
                    _super.call(this, firstName, lastName);
                    this.title = title;
                    this.company = company;
                    this.email = email;
                }
                Customer.prototype.talk = function () {
                    return _super.prototype.speak.call(this) + " I work for " + this.company + ".";
                };
                return Customer;
            }(person_1.Person));
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=customer.js.map