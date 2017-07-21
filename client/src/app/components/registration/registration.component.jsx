import React, {Component} from "react";
import {AddForm} from "./AddForm.jsx";
import UserStore from "../../stores/UserStore";
import {UserList} from "../user/UserList.component.jsx";
import UserActions from "../../actions/UserActions";
import {EditUser} from "../user/EditUser.component.jsx";

export class Registration extends Component {

    constructor(props) {
        UserActions.getAllUsers();
        super(props);
        this.state = {
            users: UserStore.getAllUsers(),
            userToEdit: UserStore.getUSerToEdit()
        };
        this.updateState = this.updateState.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        UserStore.addChangeListener('CHANGE', this.updateState);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener('CHANGE', this.updateState);
    }

    updateState() {
        this.updateUser();
    }

    updateUser() {
        this.setState({
            users: UserStore.getAllUsers(),
            userToEdit: UserStore.getUSerToEdit()
        })
    }

    render() {
        if(this.state.userToEdit == ''){
            var form = <AddForm/>
        }else {
            var form = <EditUser userToEdit={this.state.userToEdit}/>
        }

        return (
            <div>
                {form}
                <div className="col-md-offset-1 col-md-10">
                    <UserList users={this.state.users}/>
                </div>
            </div>
        );
    }
}
