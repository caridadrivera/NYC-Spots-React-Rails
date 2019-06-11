import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class SignUp extends React.Component {
  state = {
    username: '',
    password: '',

  }

  /* when the user submits the input field */

  handleChange = (e) => {
    // console.log(e)
    /*I want the id of the input field being updated*/
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

  }


  render() {

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3"> SignIn </h5>
          <div className="input-field">
            <label htmlFor="username"> Username </label>
            <input type="username" id="username" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password"> Password </label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0"> SignUp </button>
          </div>
        </form>
      </div>

    )
  }
}

export default SignUp;
