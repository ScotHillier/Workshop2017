"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("spfxBasicsStrings");
var SpfxBasics_1 = require("./components/SpfxBasics");
var SpfxBasicsWebPart = (function (_super) {
    __extends(SpfxBasicsWebPart, _super);
    function SpfxBasicsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxBasicsWebPart.prototype.render = function () {
        var element = React.createElement(SpfxBasics_1.default, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(SpfxBasicsWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxBasicsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxBasicsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpfxBasicsWebPart;

//# sourceMappingURL=SpfxBasicsWebPart.js.map
