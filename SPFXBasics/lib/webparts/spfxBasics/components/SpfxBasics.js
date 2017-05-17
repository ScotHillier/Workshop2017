"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SpfxBasics_module_scss_1 = require("./SpfxBasics.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var SpfxBasics = (function (_super) {
    __extends(SpfxBasics, _super);
    function SpfxBasics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxBasics.prototype.render = function () {
        return (React.createElement("div", { className: SpfxBasics_module_scss_1.default.helloWorld },
            React.createElement("div", { className: SpfxBasics_module_scss_1.default.container },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + SpfxBasics_module_scss_1.default.row },
                    React.createElement("div", { className: "ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1" },
                        React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: "ms-font-l ms-fontColor-white" }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: "ms-font-l ms-fontColor-white" }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: SpfxBasics_module_scss_1.default.button },
                            React.createElement("span", { className: SpfxBasics_module_scss_1.default.label }, "Learn more")))))));
    };
    return SpfxBasics;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpfxBasics;

//# sourceMappingURL=SpfxBasics.js.map
