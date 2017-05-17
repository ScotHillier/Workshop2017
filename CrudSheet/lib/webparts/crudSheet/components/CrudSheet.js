"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CrudRow_1 = require("./CrudRow");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var CrudSheet = (function (_super) {
    __extends(CrudSheet, _super);
    function CrudSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { "contacts": props.contacts };
        _this.contactEdited = _this.contactEdited.bind(_this);
        _this.contactDeleted = _this.contactDeleted.bind(_this);
        _this.contactAdded = _this.contactAdded.bind(_this);
        return _this;
    }
    CrudSheet.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { style: { 'padding': '5px' } },
                React.createElement(Button_1.Button, { onClick: this.contactAdded }, "Add a Contact")),
            React.createElement("div", { className: "ms-Grid" },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white" },
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" }),
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" }, "ID"),
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg2" }, "Last Name"),
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2" }, "First Name"),
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" }, "Phone"),
                    React.createElement("div", { className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" }, "E-mail")),
                this.state.contacts.map(function (contact) {
                    return React.createElement(CrudRow_1.default, { key: contact.id, contact: contact, contactEdited: _this.contactEdited, contactDeleted: _this.contactDeleted });
                }))));
    };
    CrudSheet.prototype.contactEdited = function (contact) {
        var _this = this;
        this.props.saveContact(contact).then(function (contacts) {
            _this.setState({ 'contacts': contacts });
        });
    };
    CrudSheet.prototype.contactDeleted = function (contact) {
        var _this = this;
        this.props.deleteContact(contact).then(function (contacts) {
            _this.setState({ 'contacts': contacts });
        });
    };
    CrudSheet.prototype.contactAdded = function () {
        var _this = this;
        this.props.addContact().then(function (contacts) {
            _this.setState({ 'contacts': contacts });
        });
    };
    return CrudSheet;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrudSheet;

//# sourceMappingURL=CrudSheet.js.map
