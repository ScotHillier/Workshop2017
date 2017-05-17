import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'spfxBasicsStrings';
import SpfxBasics from './components/SpfxBasics';
import { ISpfxBasicsProps } from './components/ISpfxBasicsProps';
import { ISpfxBasicsWebPartProps } from './ISpfxBasicsWebPartProps';

export default class SpfxBasicsWebPart extends BaseClientSideWebPart<ISpfxBasicsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxBasicsProps > = React.createElement(
      SpfxBasics,
      {
        description: this.properties.description
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
