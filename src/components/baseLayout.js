import React, { Component } from 'react';


class BaseLayout extends Component {
  render() {
    return (
      <div className="footerWrapper">
        <h1> footer</h1>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
