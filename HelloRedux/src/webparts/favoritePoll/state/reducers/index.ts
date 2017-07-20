/* Reducersare JavaScript functions
 * Reducers accept an action and return a new state
 */

import { actionTypes, gameTypes, IAction } from '../actions/index';
import { clone } from '@microsoft/sp-lodash-subset';

export interface IApplicationState{
    checkers: number;
    chess: number;
    fish: number;
}

const initialState: IApplicationState = {
  checkers: 0,
  chess: 0,
  fish: 0
};

export default (state: IApplicationState = initialState, action: IAction) => {

  switch (action.type) {
    case actionTypes.vote:

        var newState:IApplicationState = clone(state);

        if(action.data.gameType == gameTypes.checkers ){
            newState.checkers ++;
        }
        if(action.data.gameType == gameTypes.chess ){
            newState.chess ++;
        }
        if(action.data.gameType == gameTypes.fish ){
            newState.fish ++;
        }

        return newState;

    default:
        return state;
  }

};