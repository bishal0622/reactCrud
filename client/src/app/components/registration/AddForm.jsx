import React, {Component} from "react";
import UserActions from "../../actions/UserActions";

export class AddForm extends Component {

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var user ={
            username: this.refs.username.value.trim(),
            password: this.refs.password.value.trim()
        };

        UserActions.saveUser(user);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Registration Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Username" ref="username"
                                                   type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" ref="password"
                                                   type="password"/>
                                        </div>
                                        <button className="btn btn-lg btn-success btn-block" type="submit"> Save </button>
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