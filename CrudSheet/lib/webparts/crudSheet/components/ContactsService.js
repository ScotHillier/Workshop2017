"use strict";
var sp_http_1 = require("@microsoft/sp-http");
var Contact_1 = require("./Contact");
var MockContactsService = (function () {
    function MockContactsService() {
        this.contacts = new Array();
        this.contacts.push(new Contact_1.Contact(1, "Cox", "Brian", "555-555-5555", "brianc@wingtip.com"));
        this.contacts.push(new Contact_1.Contact(2, "Doyle", "Patricia", "555-555-5555", "patriciad@wingtip.com"));
        this.contacts.push(new Contact_1.Contact(3, "Yali", "David", "555-555-5555", "davidy@wingtip.com"));
        this.getContacts = this.getContacts.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.addContact = this.addContact.bind(this);
    }
    MockContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.contacts);
        });
    };
    MockContactsService.prototype.saveContact = function (contact) {
        var _this = this;
        this.contacts.forEach(function (c) {
            if (c.id === contact.id) {
                c.lastName = contact.lastName;
                c.firstName = contact.firstName;
                c.phone = contact.phone;
                c.email = contact.email;
            }
        });
        return new Promise(function (resolve) {
            resolve(_this.contacts);
        });
    };
    MockContactsService.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contacts = this.contacts.filter(function (c) {
            return c.id !== contact.id;
        });
        return new Promise(function (resolve) {
            resolve(_this.contacts);
        });
    };
    MockContactsService.prototype.addContact = function () {
        var _this = this;
        this.contacts.push(new Contact_1.Contact(this.contacts.length + 1, "Last Name", "First Name", "Phone", "Email"));
        return new Promise(function (resolve) {
            resolve(_this.contacts);
        });
    };
    return MockContactsService;
}());
exports.MockContactsService = MockContactsService;
var ContactsService = (function () {
    function ContactsService(webPartContext) {
        this.httpClient = webPartContext.spHttpClient;
        this.contacts = new Array();
        this.webAbsoluteUrl = webPartContext.pageContext.web.absoluteUrl;
        this.getContacts = this.getContacts.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.addContact = this.addContact.bind(this);
    }
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        var url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/items?$select=Id,Title,FirstName,WorkPhone,Email";
        this.contacts = [];
        return this.httpClient.get(url, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json().then(function (data) {
                data.value.forEach(function (c) {
                    _this.contacts.push(new Contact_1.Contact(c.Id, c.Title, c.FirstName, c.WorkPhone, c.Email));
                });
                return _this.contacts;
            });
        });
    };
    ContactsService.prototype.saveContact = function (contact) {
        var _this = this;
        var url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/getItemByStringId('" + contact.id + "')";
        var httpClientOptions = {
            body: JSON.stringify({
                Title: contact.lastName,
                FirstName: contact.firstName,
                WorkPhone: contact.phone,
                Email: contact.email
            })
        };
        httpClientOptions.headers = {
            'IF-MATCH': '*',
            'X-Http-Method': 'PATCH'
        };
        return this.httpClient.post(url, sp_http_1.SPHttpClient.configurations.v1, httpClientOptions)
            .then(function (response) {
            return _this.getContacts();
        });
    };
    ContactsService.prototype.deleteContact = function (contact) {
        var _this = this;
        var url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/getItemByStringId('" + contact.id + "')";
        var httpClientOptions = {};
        httpClientOptions.headers = { 'IF-MATCH': '*' };
        httpClientOptions.method = "DELETE";
        return this.httpClient.fetch(url, sp_http_1.SPHttpClient.configurations.v1, httpClientOptions)
            .then(function (response) {
            return _this.getContacts();
        });
    };
    ContactsService.prototype.addContact = function () {
        var _this = this;
        var url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/items";
        var httpClientOptions = {
            body: JSON.stringify({
                Title: "Last Name",
                FirstName: "First Name",
                WorkPhone: "Phone Number",
                Email: "E-mail"
            })
        };
        return this.httpClient.post(url, sp_http_1.SPHttpClient.configurations.v1, httpClientOptions)
            .then(function (response) {
            return _this.getContacts();
        });
    };
    return ContactsService;
}());
exports.ContactsService = ContactsService;

//# sourceMappingURL=ContactsService.js.map
