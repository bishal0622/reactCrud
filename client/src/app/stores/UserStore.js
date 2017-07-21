'use strict';

import {ReduceStore} from 'flux/utils';
import EnoteDispatcher from '../dispatcher/EnoteDispatcher';
import ActionTypes from '../actions/ActionTypes'
import { EventEmitter } from 'events';

let _users = [];

let _user = {};

let _userToEdit = '';

class UserStore extends EventEmitter {

	constructor() {
		super();
		this.dispatch = EnoteDispatcher.register(this.callback.bind(this));
        this.saveUser = this.saveUser.bind(this);
	}

	emitChange(event) {
        this.emit(event);
    }

    addChangeListener(event, callback) {
        this.on(event, callback);
    }

    removeChangeListener(event, callback) {
        this.removeListener(event, callback);
    }

	callback(action) {
        switch (action.type) {
            case ActionTypes.SAVE_USER:
                console.log('Saving Contact.......');
                // console.log(action.value);
                this.saveUser(action.user);
                break;
            case ActionTypes.GET_ALL_USERS:
                console.log('Get all Users........');
                console.log('Store:',action.users);
                _users=action.users;
                break;
            case ActionTypes.EDIT_USER:
                console.log('Edit Userrs.....');
                this.setUserToEdit(action.user);
                break;
            case ActionTypes.UPDATE_USER:
                console.log('Updating User......');
                this.updateUSer(action.user);

        }
        this.emitChange('CHANGE');
        return true;
    }

    getFirstName(){
    	return _user.firstName;
    }

    saveUser(user){
        _users.push(user);
    }

    getAllUsers(){
        console.log("getallusers:",_users);
        return _users;
    }

    setUserToEdit(user) {
        _userToEdit = user;
    }

    getUSerToEdit(){
       return _userToEdit;
    }

    updateUSer(user) {
        console.log("userstore userupdate",user);
    }
}

export default new UserStore()