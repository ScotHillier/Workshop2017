"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MyPart = (function (_super) {
    __extends(MyPart, _super);
    function MyPart(props) {
        return _super.call(this, props) || this;
    }
    MyPart.prototype.render = function () {
        return (React.createElement("div", null, this.props.message));
    };
    return MyPart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyPart;

//# sourceMappingURL=MyPart.js.map
