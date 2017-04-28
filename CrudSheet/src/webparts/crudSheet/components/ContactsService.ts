import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { Contact } from './Contact';


export interface IContactsService{
    getContacts():Promise<Contact[]>;
    saveContact(contact:Contact):Promise<Contact[]>;
    deleteContact(contact): Promise<Contact[]>;
    addContact():Promise<Contact[]>;
}

export class MockContactsService implements IContactsService{

    private contacts:Contact[];

    constructor(){

        this.contacts = new Array();
        this.contacts.push(new Contact(1, "Cox", "Brian", "555-555-5555", "brianc@wingtip.com"));
        this.contacts.push(new Contact(2, "Doyle", "Patricia", "555-555-5555", "patriciad@wingtip.com"));
        this.contacts.push(new Contact(3, "Yali", "David", "555-555-5555", "davidy@wingtip.com"));

        this.getContacts = this.getContacts.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    public getContacts(): Promise<Contact[]>{
        return new Promise<Contact[]>(resolve => {
            resolve(this.contacts);
        });
    }

    public saveContact(contact): Promise<Contact[]> {
        this.contacts.forEach(c => {
            if (c.id === contact.id) {
                c.lastName = contact.lastName;
                c.firstName = contact.firstName;
                c.phone = contact.phone;
                c.email = contact.email;
            }
        });
        return new Promise<Contact[]>(resolve => {
            resolve(this.contacts);
        });
    }

    public deleteContact(contact): Promise<Contact[]> {
        this.contacts = this.contacts.filter(c => {
            return c.id !== contact.id;
        });
        return new Promise<Contact[]>(resolve => {
            resolve(this.contacts);
        });
    }

    public addContact(): Promise<Contact[]> {
        this.contacts.push(new Contact(this.contacts.length + 1,"Last Name","First Name","Phone","Email"));
        return new Promise<Contact[]>(resolve => {
            resolve(this.contacts);
        });
    }
}

export class ContactsService implements IContactsService {
    
    private httpClient: SPHttpClient;
    private contacts: Contact[];
    private webAbsoluteUrl: string;

    public constructor(webPartContext: IWebPartContext){
        this.httpClient = webPartContext.spHttpClient;
        this.contacts = new Array();
        this.webAbsoluteUrl = webPartContext.pageContext.web.absoluteUrl;

        this.getContacts = this.getContacts.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.addContact = this.addContact.bind(this);

    }

    public getContacts(): Promise<Contact[]>{

        let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/items?$select=Id,Title,FirstName,WorkPhone,Email";
        this.contacts = [];

        return this.httpClient.get(url, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            return response.json().then((data) => {
                data.value.forEach(c => {
                    this.contacts.push(new Contact(c.Id,c.Title,c.FirstName,c.WorkPhone,c.Email));
                });
                return this.contacts;
            });
        });
    }

    public saveContact(contact:Contact): Promise<Contact[]>{

        let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/getItemByStringId('" + contact.id + "')";

        const httpClientOptions: ISPHttpClientOptions = {
            body:JSON.stringify({
                Title: contact.lastName,
                FirstName: contact.firstName,
                WorkPhone: contact.phone,
                Email: contact.email
            })
        };
        httpClientOptions.headers = { 
             'IF-MATCH': '*',
             'X-Http-Method': 'PATCH' 
        };
        
        return this.httpClient.post(url, SPHttpClient.configurations.v1, httpClientOptions)
        .then((response: SPHttpClientResponse) => {
            return this.getContacts();
        });
    }

    public deleteContact(contact): Promise<Contact[]> {

        let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/getItemByStringId('" + contact.id + "')";

        const httpClientOptions: ISPHttpClientOptions = { };
        httpClientOptions.headers = {'IF-MATCH': '*'};
        httpClientOptions.method = "DELETE";
        
        return this.httpClient.fetch(url, SPHttpClient.configurations.v1, httpClientOptions)
        .then((response: SPHttpClientResponse) => {
            return this.getContacts();
        });
    }

    public addContact(): Promise<Contact[]> {

        let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Contacts')/items";
        
        const httpClientOptions: ISPHttpClientOptions = {
            body:JSON.stringify({
                Title: "Last Name",
                FirstName: "First Name",
                WorkPhone: "Phone Number",
                Email: "E-mail"
            })
        };
        
        return this.httpClient.post(url, SPHttpClient.configurations.v1, httpClientOptions)
       .then((response: SPHttpClientResponse) => {
            return this.getContacts();
        });
    }
}