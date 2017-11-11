import { Store } from 'redux';
import { IApplicationState } from '../state/reducers';

export interface IFavoritePollProps {
  store: Store<IApplicationState>;
}
