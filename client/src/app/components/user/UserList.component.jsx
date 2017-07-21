import React, {Component} from "react";
import {User} from "./User.component.jsx";

export class UserList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log("userlist props",this.props.users);
        return (
            <div>
                <h3 className="text-center">User List</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map(function (user, index) {
                            return (
                                <User user={user} key={index}/>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}