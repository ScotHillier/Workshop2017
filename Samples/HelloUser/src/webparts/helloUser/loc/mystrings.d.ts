declare interface IHelloUserStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloUserStrings' {
  const strings: IHelloUserStrings;
  export = strings;
}
