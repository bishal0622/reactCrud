'use strict';
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {Navbar} from "./navbar/navbar.component.jsx";

class Main extends Component {
    render(){
        return (
	        <div>
				<Navbar/>
				<div>
                    {this.props.children}
				</div>
	    	</div>
        );
    }
}
export default Main