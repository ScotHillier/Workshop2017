import * as React from 'react';
import PropTypes from 'prop-types';
export interface ICrudCellProps {
    name: PropTypes.string.required;
    value: PropTypes.string.required;
    className: PropTypes.string.required;
    readOnly: PropTypes.bool.required;
    rowEdited: PropTypes.func.required;
}
export interface ICrudCellState {
    editMode: boolean;
    editValue: string;
}
export default class CrudCell extends React.Component<ICrudCellProps, ICrudCellState> {
    private readOnly;
    private name;
    private value;
    private className;
    constructor(props: ICrudCellProps);
    render(): React.ReactElement<ICrudCellProps>;
    enableEditing(event: any): void;
    cellEditing(event: any): void;
    cellEdited(event: any): void;
}
