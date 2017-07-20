/* These are action creator functions
 * These functions return actions
 * Actions are JavaScript objects that can be sent to the store to change application state
 * The object typically has 'type' and a 'payload'
 *    type is the action to perform
 *    payload is the associated data
 */

export enum actionTypes{
  vote
}

export enum gameTypes {
  checkers,
  chess,
  fish
}

export interface IVoteData {
  gameType: gameTypes;
}

export interface IAction{
  type: actionTypes;
  data: IVoteData;
}

export const voteCheckers = ():IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.checkers }
  };
};

export const voteChess = ():IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.chess }
  };
};

export const voteFish = ():IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.fish }
  };
};