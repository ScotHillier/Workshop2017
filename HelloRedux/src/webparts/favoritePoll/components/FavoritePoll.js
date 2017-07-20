"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const office_ui_fabric_react_1 = require("office-ui-fabric-react");
const actions_1 = require("../state/actions");
class FavoritePoll extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store;
        let checkersCount = this.store.getState().checkers;
        let chessCount = this.store.getState().chess;
        let fishCount = this.store.getState().fish;
        let totalVotes = checkersCount + chessCount + fishCount;
        if (totalVotes !== 0) {
            this.checkersPercent = checkersCount / totalVotes;
            this.chessPercent = chessCount / totalVotes;
            this.fishPercent = fishCount / totalVotes;
        }
        else {
            this.checkersPercent = 0;
            this.chessPercent = 0;
            this.fishPercent = 0;
        }
    }
    render() {
        return (React.createElement(office_ui_fabric_react_1.Fabric, null,
            React.createElement(office_ui_fabric_react_1.Panel, null,
                React.createElement(office_ui_fabric_react_1.PrimaryButton, { onClick: () => { this.store.dispatch(actions_1.voteCheckers()); } }, "Checkers"),
                React.createElement(office_ui_fabric_react_1.PrimaryButton, { onClick: () => { this.store.dispatch(actions_1.voteChess()); } }, "Chess"),
                React.createElement(office_ui_fabric_react_1.PrimaryButton, { onClick: () => { this.store.dispatch(actions_1.voteFish()); } }, "Go Fish")),
            React.createElement(office_ui_fabric_react_1.Panel, null,
                React.createElement(office_ui_fabric_react_1.ProgressIndicator, { label: 'Checkers', percentComplete: this.checkersPercent }),
                React.createElement(office_ui_fabric_react_1.ProgressIndicator, { label: 'Chess', percentComplete: this.chessPercent }),
                React.createElement(office_ui_fabric_react_1.ProgressIndicator, { label: 'Go Fish', percentComplete: this.fishPercent }))));
    }
}
exports.default = FavoritePoll;
//# sourceMappingURL=FavoritePoll.js.map