import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { UserService } from './app.service';

@Component({
    selector: 'app-main',
    template: "<h1>Welcome, {{ displayName }}!</h1>",
    providers: [UserService]
})

export class AppComponent {

    displayName: string;

    constructor(us: UserService) {
        us.getCurrentUser().subscribe(
            user => { this.displayName = user.Title; },
            err => { console.error(err); },
            () => { console.info('completed getProducts'); }
        );
    }

}