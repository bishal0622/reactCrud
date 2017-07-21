'use strict';
import './sass/main.scss';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Main from './components/main.component.jsx'
import Profile from './components/user/profile.component.jsx'
import Home from './components/home.component.jsx'
import {Registration} from "./components/registration/registration.component.jsx";

render(
   <BrowserRouter>
    <Route>
    	<Main>
      		<Route exact path="/" component={Home}/>
      		<Route path="/profile" component={Profile}/>
			<Route path="/registration" component={Registration}/>
      	</Main>
    </Route>
	</BrowserRouter>,
    document.getElementById('container')
);