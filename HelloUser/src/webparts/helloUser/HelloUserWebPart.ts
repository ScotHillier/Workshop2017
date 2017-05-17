import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloUserStrings';
import HelloUser from './components/HelloUser';
import { IHelloUserPartProps } from './components/IHelloUserProps';
import { IHelloUserWebPartProps } from './IHelloUserWebPartProps';

export default class HelloUserWebPart extends BaseClientSideWebPart<IHelloUserWebPartProps> {

public render(): void {
  const element: React.ReactElement<IHelloUserPartProps > = React.createElement(
    HelloUser,
    {
      busyMessage: "Working on it..."
    }
  );
  ReactDom.render(element, this.domElement);
}

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
