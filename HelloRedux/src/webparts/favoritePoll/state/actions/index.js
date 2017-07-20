"use strict";
/* These are action creator functions
 * These functions return actions
 * Actions are JavaScript objects that can be sent to the store to change application state
 * The object typically has 'type' and a 'payload'
 *    type is the action to perform
 *    payload is the associated data
 */
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes;
(function (actionTypes) {
    actionTypes[actionTypes["vote"] = 0] = "vote";
})(actionTypes = exports.actionTypes || (exports.actionTypes = {}));
var gameTypes;
(function (gameTypes) {
    gameTypes[gameTypes["checkers"] = 0] = "checkers";
    gameTypes[gameTypes["chess"] = 1] = "chess";
    gameTypes[gameTypes["fish"] = 2] = "fish";
})(gameTypes = exports.gameTypes || (exports.gameTypes = {}));
exports.voteCheckers = () => {
    return {
        type: actionTypes.vote,
        payload: { framework: gameTypes.checkers }
    };
};
exports.voteChess = () => {
    return {
        type: actionTypes.vote,
        payload: { framework: gameTypes.chess }
    };
};
exports.voteFish = () => {
    return {
        type: actionTypes.vote,
        payload: { framework: gameTypes.fish }
    };
};
//# sourceMappingURL=index.js.map