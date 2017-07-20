export declare enum actionTypes {
    vote = 0,
}
export declare enum gameTypes {
    checkers = 0,
    chess = 1,
    fish = 2,
}
export interface IPayload {
    framework: gameTypes;
}
export interface IAction {
    type: actionTypes;
    payload: IPayload;
}
export declare const voteCheckers: () => {
    type: actionTypes;
    payload: {
        framework: gameTypes;
    };
};
export declare const voteChess: () => {
    type: actionTypes;
    payload: {
        framework: gameTypes;
    };
};
export declare const voteFish: () => {
    type: actionTypes;
    payload: {
        framework: gameTypes;
    };
};
