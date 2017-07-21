'use strict';
const request = function (param) {
    if (!$) {
        var $ = require('jquery');
    }
    return $.ajax({
        headers: param.headers,
        url: param.url,
        data: param.data,
        method: param.method,
        contentType: param.contentType
    }).fail(param.failure).done(param.success);
};

var headers = function (param) {
    return {
        'Content-Type': param.contentType
    }
};

const API = {
        getAllUsers: function (data, callback) {
            request({
                headers: headers({}),
                url: "http://localhost:9000/user",
                method: 'GET',
                data: data,
                success: function (res) {
                    console.log(res);
                    callback(res, null);
                },
                failure: function (jqXHR, textStatus) {
                    callback(null, textStatus);
                }
            });
        },
        removeUser: function (data, callback) {
            console.log("APi remove: ", data.userId);
            request({
                headers: headers({}),
                url: "http://localhost:9000/user/" + data.userId,
                method: 'DELETE',
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    callback(res, null);
                },
                failure: function (jqXHR, textStatus) {
                    callback(null, textStatus);
                }
            });
        },

        getUser: function (data, callback) {
            console.log("APi get: ", data.userId);
            request({
                headers: headers({}),
                url: "http://localhost:9000/user/" + data.userId,
                method: 'GET',
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    callback(res, null);
                },
                failure: function (jqXHR, textStatus) {
                    callback(null, textStatus);
                }
            });
        },


        saveUser: function (data, callback) {
            var user = {
                username: data.user.username,
                password: data.user.password
            };
            // console.log("api",user);
            request({
                headers: headers({}),
                url: "http://localhost:9000/user",
                method: 'POST',
                data: JSON.stringify(user),
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    callback(res, null);
                },
                failure: function (jqXHR, textStatus) {
                    callback(null, textStatus);
                }
            });
        },

    editUser: function (data, callback) {
        var user = {
            id: data.user.id,
            username: data.user.username,
            password: data.user.password
        };
        console.log("edit api",data);
        request({
            headers: headers({}),
            url: "http://localhost:9000/user/"+data.user.id,
            method: 'PUT',
            data: JSON.stringify(user),
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                callback(res, null);
            },
            failure: function (jqXHR, textStatus) {
                callback(null, textStatus);
            }
        });
    }
    }
;

export default API;
