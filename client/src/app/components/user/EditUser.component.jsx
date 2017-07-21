import React, {Component} from "react";
import UserActions from "../../actions/UserActions";

export class EditUser extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var user = {
            id: this.props.userToEdit.id,
            username: this.refs.username.value.trim(),
            password: this.refs.password.value.trim()
        };

        UserActions.editUser(user);
    }

    handleChange(fieldName, event) {
        var newState = event.target.value;
        var selected = this.state.selected;
        selected.name = newState;
        this.setState({
            selected: selected
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Edit Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Username" ref="username"
                                                   onChange={this.handleChange.bind(this, "username")}
                                                   value={this.props.userToEdit.username} type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" ref="password"
                                                   onChange={this.handleChange.bind(this, "password")}
                                                   value={this.props.userToEdit.password} type="password"/>
                                        </div>
                                        <button className="btn btn-lg btn-success btn-block" type="submit"> Save
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}