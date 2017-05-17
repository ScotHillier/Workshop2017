import * as React from 'react';
import { IContact, Contact } from './Contact';
import PropTypes from 'prop-types';
export interface ICrudSheetProps {
    contacts: IContact[];
    saveContact: PropTypes.func.required;
    deleteContact: PropTypes.func.required;
    addContact: PropTypes.func.required;
}
export interface ICrudSheetState {
    contacts: Contact[];
}
export default class CrudSheet extends React.Component<ICrudSheetProps, ICrudSheetState> {
    constructor(props: ICrudSheetProps);
    render(): React.ReactElement<ICrudSheetProps>;
    contactEdited(contact: IContact): void;
    contactDeleted(contact: IContact): void;
    contactAdded(): void;
}
