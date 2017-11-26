import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class Splash extends Component {
  render() {
    let details = {userFirstName:'Nacho', watchStyle:'51-30', watchMovement:'Nixon custom Swiss made quartz 3 hand with analog tide subdial and a 9-hour crown and pusher placement.',
      watchDial:'The dial is surrounded by a concave dial ring and includes bold printed indices, a printed seconds track, CD textured subdial and custom molded hands with luminous fill.',
      watchCase:'51mm, 300 meter/30 ATM custom solid stainless steel, solid stainless steel unidirectional rotating bezel with countdown timer, hardened mineral crystal, triple gasket screw down crown and pusher, stainless steel screw down caseback and screw pin lugs.',
      watchBand:'25 mm custom solid stainless steel 3 link bracelet with stainless steel double locking clasp with micro adjust.'};

    return (
      <div className="SplashWrapper">
      <section className="animation-box">
        <div className="msgWrapper">
        <div className="welcomeMsg">Welcome to the NIXON family {details.userFirstName}</div>
        <div className="watchLine">Your custom {details.watchStyle} looks great</div>
        </div>
      </section>
        <NavLink activeClassName="selected" className="nav-link" exact to="/nixonLaunch" ><button className="button" type="submit">Checkout Your Machine</button></NavLink>
      </div>
    );
  }
}

export default Splash;
