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
      nonValidatedQuery: '',
    }
    this.onUserInputSubmit = this.onUserInputSubmit.bind(this);
  };

  onUserInputSubmit(inputValue) {
    console.log(`recieved ${inputValue} from UserInput`);
    this.setState({
      nonValidatedQuery: inputValue,
    },this.validateMyQuery);
  };

  validateMyQuery() {
    console.log(`let's validate ${this.state.nonValidatedQuery}`);

    // Let's assume we've validated here and set the URL
    let validatedURL = this.state.nonValidatedQuery;

    this.setState({
      url: validatedURL,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <UserInputForm onSubmit={this.onUserInputSubmit}/>
          <VideoDisplay videoId=""/>
        </div>
      </div>
    );
  }
}

export default App;
