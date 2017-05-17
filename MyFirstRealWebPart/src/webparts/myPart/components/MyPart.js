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
var MyPart_module_scss_1 = require("./MyPart.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var MyPart = (function (_super) {
    __extends(MyPart, _super);
    function MyPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyPart.prototype.render = function () {
        return (React.createElement("div", { className: MyPart_module_scss_1.default.helloWorld },
            React.createElement("div", { className: MyPart_module_scss_1.default.container },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + MyPart_module_scss_1.default.row },
                    React.createElement("div", { className: "ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1" },
                        React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: "ms-font-l ms-fontColor-white" }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: "ms-font-l ms-fontColor-white" }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: MyPart_module_scss_1.default.button },
                            React.createElement("span", { className: MyPart_module_scss_1.default.label }, "Learn more")))))));
    };
    return MyPart;
}(React.Component));
exports.default = MyPart;
//# sourceMappingURL=MyPart.js.map