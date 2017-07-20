import * as React from 'react';
import * as ReactDom from 'react-dom';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import FavoritePoll from './components/FavoritePoll';
import { IFavoritePollProps } from './components/IFavoritePollProps';

//Import from Redux so the store can be created
//Import the reducer function 
import { createStore, Store } from 'redux';
import { IApplicationState } from './state/reducers';
import reducer from './state/reducers';

export default class FavoritePollWebPart extends BaseClientSideWebPart<null> {

  //member variable for the store
  private store: Store<IApplicationState>;

  protected onInit():Promise<void>{
    
    //create the store instance
    this.store = createStore(reducer);
    this.store.subscribe(this.render);
    this.getStore = this.getStore.bind(this);

    return super.onInit();

  }

  public render(): void {

    const element: React.ReactElement<IFavoritePollProps > = React.createElement(
      FavoritePoll,
      {
        store: this.getStore() //pass the store in the component properties
      }
    );

    ReactDom.render(element, this.domElement);

  }

  private getStore(): Store<IApplicationState>{
    return this.store;
  }

}
