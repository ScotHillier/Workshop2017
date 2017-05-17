"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//polyfills
require("core-js/client/shim");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
//ng2
require("rxjs/Subject");
require("rxjs/Observable");
require("@angular/common");
require("@angular/compiler");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//spfx
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
//custom
var app_module_1 = require("./app.module");
var MyFirstNgWebPartWebPart = (function (_super) {
    __extends(MyFirstNgWebPartWebPart, _super);
    function MyFirstNgWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFirstNgWebPartWebPart.prototype.render = function () {
        //inject the app element
        this.domElement.innerHTML = '<app-main></app-main>';
        //bootstrap the module
        var platform = platform_browser_dynamic_1.platformBrowserDynamic();
        platform.bootstrapModule(app_module_1.AppModule);
    };
    return MyFirstNgWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyFirstNgWebPartWebPart;

//# sourceMappingURL=Ng2BasicsWebPart.js.map
