import React, { Component } from 'react';
import UserInput from './components/UserInput.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Input a youtube URL</h2>
        </div>
        <div>
          <UserInput/>
        </div>
      </div>
    );
  }
}

export default App;
