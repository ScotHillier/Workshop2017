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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HelloUser_module_scss_1 = require("./HelloUser.module.scss");
var HelloUserPart = (function (_super) {
    __extends(HelloUserPart, _super);
    function HelloUserPart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { data: null, isValid: false };
        return _this;
    }
    HelloUserPart.prototype.render = function () {
        return (React.createElement("div", { className: HelloUser_module_scss_1.default.helloWorld },
            "`Welcome, ",
            this.state.data,
            "!`"));
    };
    HelloUserPart.prototype.componentDidMount = function () {
        var _this = this;
        fetch('../../_api/web/currentuser', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'accept': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            _this.setState({ data: json.Title, isValid: true });
        }).catch(function (e) {
            console.log(e);
        });
    };
    return HelloUserPart;
}(React.Component));
exports.default = HelloUserPart;
//# sourceMappingURL=HelloUser.js.map