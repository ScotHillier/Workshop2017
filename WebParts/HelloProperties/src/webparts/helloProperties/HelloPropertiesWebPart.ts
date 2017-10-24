/*
  1. Import the field types you want to use from @microsoft/sp-webpart-base
  2. Update IHelloPropertiesWebPartProps to include a member for each new property
  3. (optional) Update en-us.js and mystrings.d.ts for any local strings you want to use
  4. Update getPropertyPaneConfiguration() to define pages, groups, and controls
  5. Update IHelloPropertiesWebPart.manifest.json to define default values
  6. Update render() to display the property values
*/

// Step 1: import types to support property fields
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IWebPartContext,
  IPropertyPaneConfiguration,
  PropertyPaneTextField, 
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';
import styles from './HelloPropertiesWebPart.module.scss';
import * as strings from 'HelloPropertiesWebPartStrings';

// Step 2: define members to hold the values for each property
export interface IHelloPropertiesWebPartProps {
  myTextProperty: string;
  myCheckboxProperty: boolean;
  myLabelProperty: string;
  myLinkProperty: string;
  mySliderProperty: number;
  myToggleProperty: boolean;
  myDropdownProperty: string;
}


export default class HelloPropertiesWebPartWebPart extends BaseClientSideWebPart<IHelloPropertiesWebPartProps> {

     // Step 5: use property values when part is rendered
     public render(): void {
      this.domElement.innerHTML = `
    <div class="${styles.helloProperties}">
      <div class="${styles.container}">
        <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
          <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
            <span class="ms-font-xl ms-fontColor-white">Properties!</span>
            <p class="ms-font-l ms-fontColor-white">Use this web part to investigate properties</p>
              <div class="ms-Grid">
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Single Line of Text
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myTextProperty}
                          </div>
                      </div>
                  </div>
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Checkbox
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myCheckboxProperty}
                          </div>
                      </div>
                  </div>
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Read-Only Label
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myLabelProperty}
                          </div>
                      </div>
                  </div
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Hyperlink
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myLinkProperty}
                          </div>
                      </div>
                  </div>
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Slider
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.mySliderProperty}
                          </div>
                      </div>
                  </div>
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Toggle
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myToggleProperty}
                          </div>
                      </div>
                  </div>
                  <div class="ms-Grid-row">
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                          <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                              Drop-down list
                          </div>
                      </div>
                      <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                          <div class="ms-font-m">
                              ${this.properties.myDropdownProperty}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>`;
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
                          PropertyPaneTextField('myTextProperty', {
                              label: strings.TextFieldLabel
                          }),
                          PropertyPaneCheckbox('myCheckboxProperty', {
                              text: strings.CheckboxFieldLabel
                          }),
                          PropertyPaneLabel('myLabelProperty', {
                              text: strings.LabelFieldLabel
                          })
                      ]
                  },
                  {
                      groupName: strings.AdvancedGroupName,
                      groupFields: [
                          PropertyPaneLink('myLinkProperty', {
                              text: strings.LinkFieldText,
                              href: strings.LinkFieldUrl
                          }),
                          PropertyPaneSlider('mySliderProperty', {
                              label: strings.SliderFieldLabel,
                              step: 1,
                              min: 1,
                              max: 10
                          }),
                          PropertyPaneToggle('myToggleProperty', {
                              label: strings.ToggleFieldLabel,
                              onText: "On!",
                              offText: "Off!"
                          }),
                          PropertyPaneDropdown('myDropdownProperty', {
                              label: strings.DropdownFieldLabel,
                              options: [
                                  { key: '1', text: 'One' },
                                  { key: '2', text: 'Two' },
                                  { key: '3', text: 'Three' },
                                  { key: '4', text: 'Four' }
                              ]
                          })
                      ]
                  }
              ]
          }
      ]
  };

    }

}
