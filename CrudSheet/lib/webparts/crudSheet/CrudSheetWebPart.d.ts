/// <reference types="es6-promise" />
import { IContact, Contact } from './components/Contact';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export default class CrudSheetWebPart extends BaseClientSideWebPart<void> {
    private contactsService;
    private sheet;
    protected onInit(): Promise<void>;
    render(): void;
    saveContact(contact: IContact): Promise<Contact[]>;
    deleteContact(contact: IContact): Promise<Contact[]>;
    addContact(): Promise<Contact[]>;
    protected readonly dataVersion: Version;
}
