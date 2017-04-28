import * as React from 'react';
import { IContact } from './Contact';
import CrudCell from './CrudCell';
import PropTypes from 'prop-types';

export interface ICrudRowProps{
  contact: IContact;
  contactEdited: PropTypes.func.required;
  contactDeleted: PropTypes.func.required;
}

export default class CrudRow extends React.Component<ICrudRowProps, void> {

private contact: IContact;

constructor(props: ICrudRowProps){
  super(props);
  this.contact = props.contact;

  this.rowEdited = this.rowEdited.bind(this);
  this.rowDeleted = this.rowDeleted.bind(this);
}

  public render(): React.ReactElement<ICrudRowProps> {
      return (<div className="ms-Grid-row ms-bgColor-themeLighter ms-fontColor-neutralDark">
                <div className="ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1"><i onClick={this.rowDeleted} className="ms-Icon ms-Icon--Delete" aria-hidden="true"></i></div>
                <CrudCell key={this.contact.id + 10} readOnly={true} name="Id" value={this.contact.id.toString()} rowEdited={this.rowEdited} className="ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" />
                <CrudCell key={this.contact.id + 20} readOnly={false} name="Title" value={this.contact.lastName} rowEdited={this.rowEdited} className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg2" />
                <CrudCell key={this.contact.id + 30} readOnly={false} name="FirstName" value={this.contact.firstName} rowEdited={this.rowEdited} className="ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2" />
                <CrudCell key={this.contact.id + 40} readOnly={false} name="WorkPhone" value={this.contact.phone} rowEdited={this.rowEdited} className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" />
                <CrudCell key={this.contact.id + 50} readOnly={false} name="Email" value={this.contact.email} rowEdited={this.rowEdited} className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" />
             </div>);
  }

  public rowEdited(name:string, value:string): void {
      switch(name){
          case 'Title':
          this.contact.lastName = value;
          break;
          case 'FirstName':
          this.contact.firstName = value;
          break;
          case 'WorkPhone':
          this.contact.phone = value;
          break;
          case 'Email':
          this.contact.email = value;
          break;
      }
      this.props.contactEdited(this.contact);
  }

  public rowDeleted(): void {
    this.props.contactDeleted(this.contact);
  }

}