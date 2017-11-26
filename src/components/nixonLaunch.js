import React, { Component } from 'react';

class Launch extends Component {

  render() {
    let details = {userFirstName:'Nacho', watchStyle:'51-30'};

    return (
      <div className="launchWrapper">
        <div className="header"><h1>Time Tailored To You</h1></div>
        <section className="animation-box">
        <div className="welcomeMsg">Welcome to the NIXON family {details.userFirstName}</div>
        </section>
        <img src="https://theawesomer.com/photos/2008/12/122208_nixon_1.jpg" alt='Your Watch '/>
        <div className="watchLine">Your custom {details.watchStyle} looks great</div>
        <div className="mediaLine"> Now Take Some Time To Share Your Machine<br/>
          <div className="social__container">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-pinterest"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Launch;
