System.register(["./typescriptPerson"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var typescriptPerson_1, Customer;
    return {
        setters: [
            function (typescriptPerson_1_1) {
                typescriptPerson_1 = typescriptPerson_1_1;
            }
        ],
        execute: function () {
            Customer = /** @class */ (function (_super) {
                __extends(Customer, _super);
                function Customer(firstName, lastName, title, company, email) {
                    var _this = _super.call(this, firstName, lastName) || this;
                    _this.title = title;
                    _this.company = company;
                    _this.email = email;
                    return _this;
                }
                Customer.prototype.talk = function () {
                    return _super.prototype.speak.call(this) + " I work for " + this.company + ".";
                };
                return Customer;
            }(typescriptPerson_1.Person));
            exports_1("Customer", Customer);
        }
    };
});
//# sourceMappingURL=typescriptCustomer.js.map