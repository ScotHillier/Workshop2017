"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CrudCell_1 = require("./CrudCell");
var CrudRow = (function (_super) {
    __extends(CrudRow, _super);
    function CrudRow(props) {
        var _this = _super.call(this, props) || this;
        _this.contact = props.contact;
        _this.rowEdited = _this.rowEdited.bind(_this);
        _this.rowDeleted = _this.rowDeleted.bind(_this);
        return _this;
    }
    CrudRow.prototype.render = function () {
        return (React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeLighter ms-fontColor-neutralDark" },
            React.createElement("div", { className: "ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" },
                React.createElement("i", { onClick: this.rowDeleted, className: "ms-Icon ms-Icon--Delete", "aria-hidden": "true" })),
            React.createElement(CrudCell_1.default, { key: this.contact.id + 10, readOnly: true, name: "Id", value: this.contact.id.toString(), rowEdited: this.rowEdited, className: "ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" }),
            React.createElement(CrudCell_1.default, { key: this.contact.id + 20, readOnly: false, name: "Title", value: this.contact.lastName, rowEdited: this.rowEdited, className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg2" }),
            React.createElement(CrudCell_1.default, { key: this.contact.id + 30, readOnly: false, name: "FirstName", value: this.contact.firstName, rowEdited: this.rowEdited, className: "ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2" }),
            React.createElement(CrudCell_1.default, { key: this.contact.id + 40, readOnly: false, name: "WorkPhone", value: this.contact.phone, rowEdited: this.rowEdited, className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" }),
            React.createElement(CrudCell_1.default, { key: this.contact.id + 50, readOnly: false, name: "Email", value: this.contact.email, rowEdited: this.rowEdited, className: "ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" })));
    };
    CrudRow.prototype.rowEdited = function (name, value) {
        switch (name) {
            case 'Title':
                this.contact.lastName = value;
                break;
            case 'FirstName':
                this.contact.firstName = value;
                break;
            case 'WorkPhone':
                this.contact.phone = value;
                break;
            case 'Email':
                this.contact.email = value;
                break;
        }
        this.props.contactEdited(this.contact);
    };
    CrudRow.prototype.rowDeleted = function () {
        this.props.contactDeleted(this.contact);
    };
    return CrudRow;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrudRow;

//# sourceMappingURL=CrudRow.js.map
