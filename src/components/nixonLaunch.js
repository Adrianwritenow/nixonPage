import React, { Component } from 'react';

class Launch extends Component {

  render() {
    let details = {userFirstName:'Nacho', watchStyle:'51-30', watchMovement:'Nixon custom Swiss made quartz 3 hand with analog tide subdial and a 9-hour crown and pusher placement.',
      watchDial:'The dial is surrounded by a concave dial ring and includes bold printed indices, a printed seconds track, CD textured subdial and custom molded hands with luminous fill.',
      watchCase:'51mm, 300 meter/30 ATM custom solid stainless steel, solid stainless steel unidirectional rotating bezel with countdown timer, hardened mineral crystal, triple gasket screw down crown and pusher, stainless steel screw down caseback and screw pin lugs.',
      watchBand:'25 mm custom solid stainless steel 3 link bracelet with stainless steel double locking clasp with micro adjust.'};

    return (
      <div className="launchWrapper">
        <div className="watchSpecs">
        <img  src={require('../images/nixonWatch.png')} alt="the logo"/>
          <ul>
            <li>Watch Movement:<p>{details.watchMovement}</p></li>
            <li>Watch Dial:<p>{details.watchDial}</p></li>
            <li>Watch Case:<p>{details.watchCase}</p></li>
            <li>Watch Band:<p>{details.watchBand}</p></li>
          </ul>
        </div>
          <div className="mediaLine"> We see you. Get featured by showing us how you #NIXON
            Instagram or Tweet your photos to join the conversation<br/>
            <div className="social__container">
              <a href="https://www.facebook.com/nixon" className="fa fa-facebook"></a>
              <a href="https://twitter.com/nixon_now?lang=en" className="fa fa-twitter"></a>
              <a href="https://www.instagram.com/nixon/" className="fa fa-instagram"></a>
              <a href="https://www.pinterest.com/nixon/" className="fa fa-pinterest"></a>
            </div>
          </div>
      </div>
    );
  }
}

export default Launch;
