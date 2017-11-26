import React, { Component } from 'react';


class BaseLayout extends Component {
  render() {
    return (
      <div className="footerWrapper">
        {this.props.children}
        <footer> &#169; 2017 Nixon Inc.</footer>
      </div>
    );
  }
}

export default BaseLayout;
