"use strict";
/* Reducersare JavaScript functions
 * Reducers accept an action and return a new state
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../actions/index");
const initialState = {
    checkers: 0,
    chess: 0,
    fish: 0
};
exports.default = (state = initialState, action) => {
    switch (action.type) {
        case index_1.actionTypes.vote:
            var newState = Object.assign({}, state);
            if (action.payload.framework == index_1.gameTypes.checkers) {
                newState.checkers++;
            }
            if (action.payload.framework == index_1.gameTypes.chess) {
                newState.chess++;
            }
            if (action.payload.framework == index_1.gameTypes.fish) {
                newState.fish++;
            }
            return newState;
        default:
            return state;
    }
};
//# sourceMappingURL=index.js.map