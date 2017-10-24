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
var productService_1 = require("./productService");
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        var _this = this;
        console.log('constructor');
        debugger;
        _this = _super.call(this, props) || this; //always call super with props
        _this.state = { isReady: false, displayData: [] }; //set initial state
        _this.productService = new productService_1.ProductService(); //create a service instance
        _this.categories = [];
        return _this;
    }
    MyComponent.prototype.componentWillMount = function () {
        console.log('componentWillMount');
    };
    MyComponent.prototype.render = function () {
        debugger;
        if (!this.state.isReady) {
            console.log('render loading message');
            return React.createElement("div", null, "Loading...");
        }
        else {
            console.log('render async data');
            return (React.createElement("div", null,
                React.createElement("h2", null, "Northwind Categories"),
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Name"),
                            React.createElement("td", null, "Description")),
                        this.categories.map(function (category) {
                            return (React.createElement("tr", { key: category.CategoryName },
                                React.createElement("td", null, category.CategoryName),
                                React.createElement("td", null, category.Description)));
                        })))));
        }
    };
    MyComponent.prototype.componentDidMount = function () {
        console.log('componentDidMount');
        var that = this;
        //great time to call a service!
        console.log('calling async service');
        debugger;
        this.productService.getCategories().then(function (categoryResponse) {
            debugger;
            console.log('async service returned data');
            that.categories = [];
            categoryResponse.value.map(function (cat) {
                var category = new Category();
                category.CategoryName = cat.CategoryName;
                category.Description = cat.Description;
                that.categories.push(category);
            });
            debugger;
            console.log('updating component state');
            that.setState({ isReady: true, displayData: that.categories }); //changing state force a re-render
        });
    };
    MyComponent.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps');
    };
    MyComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    };
    MyComponent.prototype.componentWillUpdate = function (nextProps, nextState) {
        console.log('componentWillUpdate');
    };
    MyComponent.prototype.componentDidUpdate = function (prevprops, prevState) {
        console.log('componentDidUpdate');
    };
    MyComponent.prototype.componentWillUnmount = function () {
        console.log('componentWillUnmount');
    };
    return MyComponent;
}(React.Component));
exports.MyComponent = MyComponent;
;
//# sourceMappingURL=app.component.js.map