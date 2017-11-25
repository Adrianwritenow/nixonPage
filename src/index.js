import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Splash from './components/splash';
import Launch from './components/nixonLaunch';


ReactDOM.render(
  <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Splash}/>
         <Route exact path="/nixonLaunch" component={Launch}/>
       </Switch>
   </BrowserRouter>

, document.getElementById('root'));
