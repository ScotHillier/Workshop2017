import * as React from 'react';
import { IFavoritePollProps } from './IFavoritePollProps';
import { Fabric, PrimaryButton, ProgressIndicator } from 'office-ui-fabric-react';
import { voteCheckers, voteChess, voteFish } from '../state/actions';


export default class FavoritePoll extends React.Component<IFavoritePollProps, void> {

  public render(): React.ReactElement<IFavoritePollProps> {

    //calculate results based on application state
    let checkersPercent = 0;
    let chessPercent = 0;
    let fishPercent = 0;
    let store = this.props.store;
    let checkersCount = store.getState().checkers;
    let chessCount = store.getState().chess;
    let fishCount = store.getState().fish;
    let totalVotes = checkersCount + chessCount + fishCount;
    if(totalVotes !== 0){
      checkersPercent = checkersCount/totalVotes;
      chessPercent = chessCount/totalVotes;
      fishPercent = fishCount/totalVotes;
    }

      return (
       <Fabric>
         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-u-lg4" style={{ textAlign: 'center'}}>
              <PrimaryButton onClick={() => { store.dispatch(voteCheckers()); }}>Checkers</PrimaryButton>
           </div>
           <div className="ms-Grid-col ms-u-lg4" style={{ textAlign: 'center'}}>
              <PrimaryButton onClick={() => { store.dispatch(voteChess()); }}>Chess</PrimaryButton>
           </div>
           <div className="ms-Grid-col ms-u-lg4" style={{ textAlign: 'center'}}>
              <PrimaryButton onClick={() => { store.dispatch(voteFish()); }}>Go Fish</PrimaryButton>
           </div>
         </div>
         <div style={{ marginTop:'40px'}}>
         </div>
         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-u-lg10 ms-u-lgPush1">
              <ProgressIndicator label='Checkers' percentComplete={ checkersPercent } ></ProgressIndicator>
           </div>
           <div className="ms-Grid-col ms-u-lg10 ms-u-lgPush1">
           <ProgressIndicator label='Chess' percentComplete={ chessPercent }></ProgressIndicator>
           </div>
           <div className="ms-Grid-col ms-u-lg10 ms-u-lgPush1">
              <ProgressIndicator label='Go Fish' percentComplete={ fishPercent }></ProgressIndicator>
          </div>
         </div>
       </Fabric>
     );
  }

}
