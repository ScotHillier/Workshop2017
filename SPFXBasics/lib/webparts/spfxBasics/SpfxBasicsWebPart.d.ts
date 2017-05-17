import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ISpfxBasicsWebPartProps } from './ISpfxBasicsWebPartProps';
export default class SpfxBasicsWebPart extends BaseClientSideWebPart<ISpfxBasicsWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
