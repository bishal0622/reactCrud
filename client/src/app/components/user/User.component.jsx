import React,{Component} from "react";
import {Link} from "react-router-dom";
import UserActions from "../../actions/UserActions";

export class User extends Component{

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleRemove(i,j){
        UserActions.removeUser(i);
    }

    handleEdit(i,j){
        UserActions.editUser(i);
    }

    render(){
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.password}</td>
                <td>
                    <span><Link to="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.user)}> Edit </Link> </span>
                    <span><Link to="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.user.id)}> Delete </Link> </span>
                </td>
            </tr>
        );
    }
}