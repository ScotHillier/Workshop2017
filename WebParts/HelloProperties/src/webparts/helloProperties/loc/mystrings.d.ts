// Step 3: return values for static strings that you might want to use
declare interface IHelloPropertiesWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AdvancedGroupName: string;
  TextFieldLabel: string;
  CheckboxFieldLabel: string;
  LabelFieldLabel: string;
  LinkFieldText: string;
  LinkFieldUrl: string;
  SliderFieldLabel: string;
  ToggleFieldLabel: string;
  DropdownFieldLabel: string;
}

declare module 'HelloPropertiesWebPartStrings' {
  const strings: IHelloPropertiesWebPartStrings;
  export = strings;
}
