"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Greeter = (function (_super) {
    __extends(Greeter, _super);
    function Greeter() {
        _super.apply(this, arguments);
    }
    Greeter.prototype.render = function () {
        return React.createElement("div", null, "Hello, React!");
    };
    return Greeter;
}(React.Component));
;
//# sourceMappingURL=app.component.js.map