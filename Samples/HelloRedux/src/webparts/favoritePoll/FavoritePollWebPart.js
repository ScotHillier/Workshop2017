"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
const FavoritePoll_1 = require("./components/FavoritePoll");
//Import from Redux so the store can be created
//Import the reducer function 
const redux_1 = require("redux");
const reducers_1 = require("./state/reducers");
class FavoritePollWebPart extends sp_webpart_base_1.BaseClientSideWebPart {
    constructor() {
        super();
        //create the store and ensure render is called whenever state changes
        this.store = redux_1.createStore(reducers_1.default);
        this.store.subscribe(this.render);
    }
    render() {
        const element = React.createElement(FavoritePoll_1.default, {
            store: this.store //pass the store in the component properties
        });
        ReactDom.render(element, this.domElement);
    }
}
exports.default = FavoritePollWebPart;
//# sourceMappingURL=FavoritePollWebPart.js.map