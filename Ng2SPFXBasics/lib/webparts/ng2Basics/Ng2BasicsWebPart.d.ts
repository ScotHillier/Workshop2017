import 'core-js/client/shim';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'rxjs/Subject';
import 'rxjs/Observable';
import '@angular/common';
import '@angular/compiler';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { INg2BasicsWebPartProps } from './INg2BasicsWebPartProps';
export default class MyFirstNgWebPartWebPart extends BaseClientSideWebPart<INg2BasicsWebPartProps> {
    render(): void;
}
