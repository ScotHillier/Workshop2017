import * as React from 'react';
import { IContact, Contact } from './Contact';
import CrudRow from './CrudRow';
import PropTypes from 'prop-types';
import { Button } from 'office-ui-fabric-react/lib/Button';

export interface ICrudSheetProps{
  contacts: IContact[];
  saveContact: PropTypes.func.required;
  deleteContact: PropTypes.func.required;
  addContact: PropTypes.func.required;
}

export interface ICrudSheetState{
  contacts: Contact[];
}

export default class CrudSheet extends React.Component<ICrudSheetProps, ICrudSheetState> {

constructor(props: ICrudSheetProps){
  super(props);
  this.state = {"contacts": props.contacts};

  this.contactEdited = this.contactEdited.bind(this);
  this.contactDeleted = this.contactDeleted.bind(this);
  this.contactAdded = this.contactAdded.bind(this);
}

  public render(): React.ReactElement<ICrudSheetProps> {
    return (
      <div>
        <div style={{'padding':'5px'}}>
          <Button onClick={ this.contactAdded}>Add a Contact</Button>
        </div>
        <div className="ms-Grid">
          <div className="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white">
            <div className="ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1">
            </div>
            <div className="ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1">
              ID
            </div>
            <div className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg2">
              Last Name
            </div>
            <div className="ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2">
              First Name
            </div>
            <div className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3">
              Phone
            </div>
            <div className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3">
              E-mail
            </div>
          </div>
          {this.state.contacts.map(contact => {
              return  <CrudRow key={contact.id} contact={contact} contactEdited={this.contactEdited} contactDeleted={this.contactDeleted} />;
          })}
        </div>
      </div>
    );
  }

  public async contactEdited(contact:IContact){
      var contacts = await this.props.saveContact(contact);
      this.setState({ 'contacts': contacts });
  }

  public async contactDeleted(contact:IContact){
    var contacts = await this.props.deleteContact(contact);
    this.setState({ 'contacts': contacts });
  }

  public async contactAdded(){
    var contacts = await this.props.addContact();
    this.setState({ 'contacts': contacts });
  }
}

