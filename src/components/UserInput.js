import React, { Component } from 'react';

class UserInputForm extends Component {

  constructor(){
    super();

    this.state = {
      query: '',
    }

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value});
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="userinput"/>
          <input type="submit" name="add"/>
        </form>
      </div>
    );
  }
}

export default UserInputForm;
