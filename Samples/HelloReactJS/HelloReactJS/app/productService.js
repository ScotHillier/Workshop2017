"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return fetch('http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5').then(function (response) {
            return response.json();
        });
    };
    ProductService.prototype.getCategories = function () {
        return fetch('http://services.odata.org/V4/Northwind/Northwind.svc/Categories?$top=5').then(function (response) {
            return response.json();
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map