System.register(['person', 'customer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var person_1, customer_1;
    var btn1, btn2;
    return {
        setters:[
            function (person_1_1) {
                person_1 = person_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            }],
        execute: function() {
            //person
            btn1 = document.querySelector('#personSpeak');
            btn1.addEventListener('click', function () {
                var person = new person_1.Person('Scot', 'Hillier');
                toastr.info(person.speak());
            });
            //customer
            btn2 = document.querySelector('#customerTalk');
            btn2.addEventListener('click', function () {
                var customer = new customer_1.Customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions, LLC', 'scot@scothillier.net');
                toastr.info(customer.talk());
            });
        }
    }
});
//# sourceMappingURL=boot.js.map