import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'myPartStrings';
import MyPart from './components/MyPart';
import { IMyPartProps } from './components/IMyPartProps';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';

export default class MyPartWebPart extends BaseClientSideWebPart<null> {

  public render(): void {

    this.context.statusRenderer.displayLoadingIndicator(
        this.domElement, "Loading Contacts...");

    if(Environment.type !== EnvironmentType.Local){
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
              ReactDom.render(React.createElement(MyPart,
               { message: `Hello, ${json.Title}` }), this.domElement);
              this.context.statusRenderer.clearLoadingIndicator(this.domElement);
          }).catch(e => {
              console.log(e);
          });
    }
    else{
        ReactDom.render(React.createElement(MyPart,   
         { message: `I'm sorry. I don't know who you are.` }), this.domElement);

        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
    }

    
  }



}
