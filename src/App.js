import React, { Component } from 'react';
import UserInputForm from './components/UserInput.js';
import VideoDisplay from './components/VideoDisplay.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    // Set initial state
    this.state = {
      url: '',
    }
  };

  onUserInputSubmit() {
    
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Input a YouTube URL</h2>
        </div>
        <div>
          <UserInputForm onSubmit={this.onUserInputSubmit}/>
          <VideoDisplay/>
        </div>
      </div>
    );
  }
}

export default App;
