import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private userUrl: string = "../_api/web/currentuser";
    private httpService: Http;

    constructor(http: Http) {
        this.httpService = http;
    }

    public getCurrentUser(): Observable<any> {

        return this.httpService.get(this.userUrl, {
            headers: new Headers(
                {
                    "Accept": "application/json"
                }
            )
        }).map((res: Response) => {
            return res.json();
        });

    }

}