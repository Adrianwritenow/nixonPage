import React, { Component } from 'react';


class BaseLayout extends Component {
  render() {
    return (
      <div className="footerWrapper">
        {this.props.children}
        <h1> footer</h1>
      </div>
    );
  }
}

export default BaseLayout;
