import 'whatwg-fetch';
import { Promise } from 'es6-promise';

export class ProductService {

    public getProducts(): Promise<any> {
        return fetch('http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5').then(response => {
            return response.json();
        });
    }

    public getCategories(): Promise<any> {
        return fetch('http://services.odata.org/V4/Northwind/Northwind.svc/Categories?$top=5').then(response => {
            return response.json();
        });
    }
}