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

    private readOnly: boolean;
    private name: string;
    private value: string;
    private className: string;
    

    constructor(props: ICrudCellProps){
        super(props);
        
        this.readOnly = props.readOnly;
        this.name = props.name;
        this.value = props.value;
        this.className = props.className;
        this.state = { editMode: false, editValue: props.value };
        
        this.enableEditing = this.enableEditing.bind(this);
        this.cellEditing = this.cellEditing.bind(this);
        this.cellEdited = this.cellEdited.bind(this);
    }

    public render(): React.ReactElement<ICrudCellProps> {
        if(!this.readOnly && this.state.editMode){
            return (<div className={ this.className }>
                     <input onChange={this.cellEditing}  onBlur={this.cellEdited} type="text" value={this.state.editValue} />
                   </div>);
        }
        else {
            return (<div className={ this.className }>
                     <span onDoubleClick={this.enableEditing} >{this.props.value}</span>
                   </div>);
        }
    }

    public enableEditing(event): void{
        if(!this.readOnly){
          this.setState({'editMode': true, 'editValue': this.props.value});
        }
    }

    public cellEditing(event): void {
        this.setState({'editMode': true, 'editValue': event.target.value});
    }

    public cellEdited(event): void {
       this.setState({'editMode': false, 'editValue': event.target.value});
       this.props.rowEdited(this.name, event.target.value);
    }

}