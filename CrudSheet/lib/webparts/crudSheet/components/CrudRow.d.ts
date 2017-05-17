import * as React from 'react';
import { IContact } from './Contact';
import PropTypes from 'prop-types';
export interface ICrudRowProps {
    contact: IContact;
    contactEdited: PropTypes.func.required;
    contactDeleted: PropTypes.func.required;
}
export default class CrudRow extends React.Component<ICrudRowProps, void> {
    private contact;
    constructor(props: ICrudRowProps);
    render(): React.ReactElement<ICrudRowProps>;
    rowEdited(name: string, value: string): void;
    rowDeleted(): void;
}
