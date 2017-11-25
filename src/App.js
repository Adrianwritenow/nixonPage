import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';




class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header"><h1>The Header</h1></div>
        <div className="main"><h1>Main</h1></div>
        <div className="footer"><h1>The Footer</h1></div>
      </div>
    );
  }
}

export default App;
