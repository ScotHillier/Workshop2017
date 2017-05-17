//polyfills
import 'core-js/client/shim';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

//ng2
import 'rxjs/Subject';
import 'rxjs/Observable';
import '@angular/common';
import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//spfx
import { BaseClientSideWebPart  } from '@microsoft/sp-webpart-base';
import { INg2BasicsWebPartProps } from './INg2BasicsWebPartProps';

//custom
import { AppModule } from './app.module';

export default class MyFirstNgWebPartWebPart extends BaseClientSideWebPart<INg2BasicsWebPartProps> {


    public render(): void {

        //inject the app element
        this.domElement.innerHTML = '<app-main></app-main>';

        //bootstrap the module
        const platform = platformBrowserDynamic();
        platform.bootstrapModule(AppModule);

    }
}