import * as React from 'react';
import { IHelloUserPartProps } from './IHelloUserProps';
import { IHelloUserPartState } from './IHelloUserProps';
export default class HelloUserPart extends React.Component<IHelloUserPartProps, IHelloUserPartState> {
    constructor(props: IHelloUserPartProps);
    render(): React.ReactElement<IHelloUserPartProps>;
    componentDidMount(): void;
}
