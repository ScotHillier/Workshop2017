import * as React from 'react';
import { IMyPartProps } from './IMyPartProps';

export default class MyPart extends React.Component<IMyPartProps, null> {

constructor(props: IMyPartProps){
  super(props);
}
  public render(): React.ReactElement<IMyPartProps> {
    return (
      <div>{this.props.message}</div>
    );
  }
}
