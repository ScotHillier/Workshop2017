define(["require", "exports", "requireModule1", "requireModule2"], function (require, exports, module1, module2) {

    //person
    var btn1 = document.querySelector('#personSpeak');
    btn1.addEventListener('click', () => {
        var person = new module1.Person('Scot', 'Hillier');
        toastr.info(person.speak());
    });

    //customer
    var btn2 = document.querySelector('#customerTalk');
    btn2.addEventListener('click', () => {
        var customer = new module2.Customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions, LLC', 'scot@scothillier.net');
        toastr.info(customer.talk());
    });

});
