import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <a className="navbar-brand" href="#">React Class</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/"><span>Home</span></Link></li>
                            <li><Link to="/profile"><span>Profile</span></Link></li>
                            <li><Link to="/registration"><span>Registration</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
