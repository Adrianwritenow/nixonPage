import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Splash from './components/splash';
import Launch from './components/nixonLaunch';
import BaseLayout from './components/baseLayout';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
         <Route exact path="/" component={Splash}/>
         <Route exact path="/nixonLaunch" component={Launch}/>
       </Switch>
      </BaseLayout>
   </BrowserRouter>

, document.getElementById('root'));
