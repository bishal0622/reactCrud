'use strict';
import React, { Component } from 'react';
import ActionTypes from '../../actions/ActionTypes'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'


class Profile extends Component {
	constructor(props){
        super(props);
        this.state = {
            firstName : "Dipak"
        };
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
    	UserStore.addChangeListener('CHANGE', this.updateState);
	}

	componentWillUnmount() {
    	UserStore.removeChangeListener('CHANGE', this.updateState);
	}

	updateState(){
		this.updateName();
	}

	updateName(){
		this.setState({firstName: UserStore.getFirstName()});
	}

    register(data) {
        UserActions.register(data);
    }

    render(){
        return (<div>Profile {this.state.firstName} <button onClick={this.register.bind(this, 'DIPAK')}>Change Name</button> </div>);
    }
}

export default Profile