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
      <div className="UserInputForm">
        <form className="UserInputForm__form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange}/>
          <input type="submit" value="Get Video"/>
        </form>
      </div>
    );
  }
}

export default UserInputForm;
