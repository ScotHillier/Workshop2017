import * as React from 'react';
import { IFavoritePollProps } from './IFavoritePollProps';
export default class FavoritePoll extends React.Component<IFavoritePollProps, void> {
    private store;
    private checkersPercent;
    private chessPercent;
    private fishPercent;
    constructor(props: IFavoritePollProps);
    public render(): React.ReactElement<IFavoritePollProps>;
}
