import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './container/App.jsx';
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"
render ((
	<Router history={hashHistory}>
     <Route path="/" component={App} />
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact}/>
     
    </Router>), document.getElementById('app'));
