declare interface IMyPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'myPartStrings' {
  const strings: IMyPartStrings;
  export = strings;
}
