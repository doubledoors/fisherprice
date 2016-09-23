import React, { Component } from 'react';

class UserInputForm extends Component {

  constructor(){
    super();

    this.state = {
      query: '',
    }
    
  };

  onChange = (e) => {
    this.setState({query: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} name="userinput"/>
          <input type="submit" name="add"/>
        </form>
      </div>
    );
  }
}

export default UserInputForm;
