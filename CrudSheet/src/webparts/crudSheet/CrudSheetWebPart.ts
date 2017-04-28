import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IContact, Contact } from './components/Contact';
import { MockContactsService, ContactsService, IContactsService } from './components/ContactsService';
import CrudSheet from './components/CrudSheet';
import { ICrudSheetProps } from './components/CrudSheet';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


export default class CrudSheetWebPart extends BaseClientSideWebPart<void> {

  private contactsService: IContactsService;
  private sheet:React.ReactElement<ICrudSheetProps>;

  protected onInit():Promise<void>{

    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.addContact = this.addContact.bind(this);

    this.contactsService = (Environment.type === EnvironmentType.Local) ?
    new MockContactsService(): new ContactsService(this.context);

    return super.onInit();
  }

  public render(): void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Contacts...");
    this.contactsService.getContacts().then((contacts) => { 
      this.context.statusRenderer.clearLoadingIndicator(this.domElement);
      ReactDom.render(React.createElement(CrudSheet, { 
        "contacts": contacts, 
        "saveContact": this.saveContact,
        "deleteContact": this.deleteContact,
        "addContact": this.addContact}), this.domElement);
    });
  }

  public saveContact(contact:IContact): Promise<Contact[]>{
    return this.contactsService.saveContact(contact);
  }

  public deleteContact(contact:IContact): Promise<Contact[]>{
    return this.contactsService.deleteContact(contact);
  }

  public addContact(): Promise<Contact[]>{
    return this.contactsService.addContact();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


}
