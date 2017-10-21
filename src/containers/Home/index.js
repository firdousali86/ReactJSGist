import React, { Component } from 'react';
import {Images} from '../../helpers';

class Home extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={Images.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  
  export default Home;
  