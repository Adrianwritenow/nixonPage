import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class Splash extends Component {
  render() {
    return (
      <div className="SplashWrapper">
        <div className="header"><h1>Splash</h1></div>
        <NavLink activeClassName="selected" className="nav-link" exact to="/nixonLaunch" ><button className="button" type="submit">Continue</button></NavLink>
      </div>
    );
  }
}

export default Splash;
