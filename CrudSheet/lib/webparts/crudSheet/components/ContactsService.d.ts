/// <reference types="es6-promise" />
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { Contact } from './Contact';
export interface IContactsService {
    getContacts(): Promise<Contact[]>;
    saveContact(contact: Contact): Promise<Contact[]>;
    deleteContact(contact: any): Promise<Contact[]>;
    addContact(): Promise<Contact[]>;
}
export declare class MockContactsService implements IContactsService {
    private contacts;
    constructor();
    getContacts(): Promise<Contact[]>;
    saveContact(contact: any): Promise<Contact[]>;
    deleteContact(contact: any): Promise<Contact[]>;
    addContact(): Promise<Contact[]>;
}
export declare class ContactsService implements IContactsService {
    private httpClient;
    private contacts;
    private webAbsoluteUrl;
    constructor(webPartContext: IWebPartContext);
    getContacts(): Promise<Contact[]>;
    saveContact(contact: Contact): Promise<Contact[]>;
    deleteContact(contact: any): Promise<Contact[]>;
    addContact(): Promise<Contact[]>;
}
