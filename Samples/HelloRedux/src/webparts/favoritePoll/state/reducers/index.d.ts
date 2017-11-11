import { IAction } from '../actions/index';
export interface IApplicationState {
    checkers: number;
    chess: number;
    fish: number;
}
declare const _default: (state: IApplicationState, action: IAction) => IApplicationState;
export default _default;
