"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CrudCell = (function (_super) {
    __extends(CrudCell, _super);
    function CrudCell(props) {
        var _this = _super.call(this, props) || this;
        _this.readOnly = props.readOnly;
        _this.name = props.name;
        _this.value = props.value;
        _this.className = props.className;
        _this.state = { editMode: false, editValue: props.value };
        _this.enableEditing = _this.enableEditing.bind(_this);
        _this.cellEditing = _this.cellEditing.bind(_this);
        _this.cellEdited = _this.cellEdited.bind(_this);
        return _this;
    }
    CrudCell.prototype.render = function () {
        if (!this.readOnly && this.state.editMode) {
            return (React.createElement("div", { className: this.className },
                React.createElement("input", { onChange: this.cellEditing, onBlur: this.cellEdited, type: "text", value: this.state.editValue })));
        }
        else {
            return (React.createElement("div", { className: this.className },
                React.createElement("span", { onDoubleClick: this.enableEditing }, this.props.value)));
        }
    };
    CrudCell.prototype.enableEditing = function (event) {
        if (!this.readOnly) {
            this.setState({ 'editMode': true, 'editValue': this.props.value });
        }
    };
    CrudCell.prototype.cellEditing = function (event) {
        this.setState({ 'editMode': true, 'editValue': event.target.value });
    };
    CrudCell.prototype.cellEdited = function (event) {
        this.setState({ 'editMode': false, 'editValue': event.target.value });
        this.props.rowEdited(this.name, event.target.value);
    };
    return CrudCell;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrudCell;

//# sourceMappingURL=CrudCell.js.map
