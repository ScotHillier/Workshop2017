"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var ContactsService_1 = require("./components/ContactsService");
var CrudSheet_1 = require("./components/CrudSheet");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var CrudSheetWebPart = (function (_super) {
    __extends(CrudSheetWebPart, _super);
    function CrudSheetWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrudSheetWebPart.prototype.onInit = function () {
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.addContact = this.addContact.bind(this);
        this.contactsService = (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) ?
            new ContactsService_1.MockContactsService() : new ContactsService_1.ContactsService(this.context);
        return _super.prototype.onInit.call(this);
    };
    CrudSheetWebPart.prototype.render = function () {
        var _this = this;
        this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Contacts...");
        this.contactsService.getContacts().then(function (contacts) {
            _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            ReactDom.render(React.createElement(CrudSheet_1.default, {
                "contacts": contacts,
                "saveContact": _this.saveContact,
                "deleteContact": _this.deleteContact,
                "addContact": _this.addContact
            }), _this.domElement);
        });
    };
    CrudSheetWebPart.prototype.saveContact = function (contact) {
        return this.contactsService.saveContact(contact);
    };
    CrudSheetWebPart.prototype.deleteContact = function (contact) {
        return this.contactsService.deleteContact(contact);
    };
    CrudSheetWebPart.prototype.addContact = function () {
        return this.contactsService.addContact();
    };
    Object.defineProperty(CrudSheetWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    return CrudSheetWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrudSheetWebPart;

//# sourceMappingURL=CrudSheetWebPart.js.map
