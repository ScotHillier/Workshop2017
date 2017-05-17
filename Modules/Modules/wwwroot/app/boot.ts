import {Person} from 'person'
import {Customer} from 'customer'

//person
var btn1 = document.querySelector('#personSpeak');
btn1.addEventListener('click', () => {
    var person = new Person('Scot', 'Hillier');
    toastr.info(person.speak());
});

//customer
var btn2 = document.querySelector('#customerTalk');
btn2.addEventListener('click', () => {
    var customer = new Customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions, LLC', 'scot@scothillier.net');
    toastr.info(customer.talk());
});
