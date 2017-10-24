import * as React from 'react';
import styles from './HelloUser.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { IHelloUserPartProps } from './IHelloUserProps';
import { IHelloUserPartState } from './IHelloUserProps';

export default class HelloUserPart 
       extends React.Component<IHelloUserPartProps, IHelloUserPartState> {

constructor(props: IHelloUserPartProps) {
   super(props);
   this.state = { data: null, isValid: false };
}


  public render(): React.ReactElement<IHelloUserPartProps> {
    return (
      <div className={styles.helloWorld}>Welcome, {this.state.data}!</div>
    );
  }

  public componentDidMount(): void {
          fetch(
              '../../_api/web/currentuser',
              {
                  method: 'GET',
                  credentials: 'same-origin',
                  headers: {
                      'accept': 'application/json'
                  }
              }
          ).then(response => {
              return response.json();
          }).then(json => {
              console.log(json);
              this.setState({ data: json.Title, isValid: true });
          }).catch(e => {
              console.log(e);
          });
  }


}
