"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var MyPart_1 = require("./components/MyPart");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var MyPartWebPart = (function (_super) {
    __extends(MyPartWebPart, _super);
    function MyPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyPartWebPart.prototype.render = function () {
        var _this = this;
        this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Contacts...");
        if (sp_core_library_1.Environment.type !== sp_core_library_1.EnvironmentType.Local) {
            fetch('../../_api/web/currentuser', {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'accept': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                ReactDom.render(React.createElement(MyPart_1.default, { message: "Hello, " + json.Title }), _this.domElement);
                _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            }).catch(function (e) {
                console.log(e);
            });
        }
        else {
            ReactDom.render(React.createElement(MyPart_1.default, { message: "I'm sorry. I don't know who you are." }), this.domElement);
            this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        }
    };
    return MyPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyPartWebPart;

//# sourceMappingURL=MyPartWebPart.js.map
