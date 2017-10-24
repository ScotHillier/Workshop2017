System.register(["./typescriptPerson", "./typescriptCustomer"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var typescriptPerson_1, typescriptCustomer_1, btn1, btn2;
    return {
        setters: [
            function (typescriptPerson_1_1) {
                typescriptPerson_1 = typescriptPerson_1_1;
            },
            function (typescriptCustomer_1_1) {
                typescriptCustomer_1 = typescriptCustomer_1_1;
            }
        ],
        execute: function () {
            //person
            btn1 = document.querySelector('#personSpeak');
            btn1.addEventListener('click', function () {
                var person = new typescriptPerson_1.Person('Scot', 'Hillier');
                toastr.info(person.speak());
            });
            //customer
            btn2 = document.querySelector('#customerTalk');
            btn2.addEventListener('click', function () {
                var customer = new typescriptCustomer_1.Customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions, LLC', 'scot@scothillier.net');
                toastr.info(customer.talk());
            });
        }
    };
});
//# sourceMappingURL=typescriptBoot.js.map