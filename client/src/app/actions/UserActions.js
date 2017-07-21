'use strict';

import EnoteDispatcher from '../dispatcher/EnoteDispatcher';
import ActionTypes from './ActionTypes'
import API from '../api/API'


const UserActions = {

        saveUser(user){
            API.saveUser({user}, function (d, e) {
                EnoteDispatcher.dispatch({
                    type: ActionTypes.SAVE_USER,
                    user: user
                });
            })
        },

        removeUser(userId){
            console.log("userIDddd", userId);
            API.removeUser({userId}, function (d, e) {
                EnoteDispatcher.dispatch({
                    type: ActionTypes.REMOVE_USER,
                    userId: userId
                });
            });
        },

        updateUser(user){
            console.log(user);
            EnoteDispatcher.dispatch({
                type: ActionTypes.UPDATE_USER,
                user: user
            });
        },

        editUser(user){
            console.log("action user", user);
            API.editUser({user}, function (d, e) {
                EnoteDispatcher.dispatch({
                    type: ActionTypes.EDIT_USER,
                    user: user
                });
            });
        }

        ,

        getAllUsersResponse(res)
        {
            console.log("response", res);
            EnoteDispatcher.dispatch({
                type: ActionTypes.GET_ALL_USERS,
                users: res
            });
        }
        ,

        getAllUsers()
        {
            API.getAllUsers({}, this.getAllUsersResponse);
        }


    }
;

export default UserActions;
