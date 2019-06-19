import React from 'react';
import { withRouter } from 'react-router-dom'
import './SignIn.sass'

const initialState = {
  error:false,
  fields: {
    username: '',
    password: ''
  }
}

class SignIn extends React.Component {
  //* first I want to render my form on the page, */
  //* then I want to fetch from my users localhost and make a post request to my backend, */
  /* I want to make a post request to my backend with the input on the form*/

  constructor() {
    super();
    this.state = initialState
  }
  /* when the user submits the input field */
  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value};
    // console.log(e)
    /*I want the id of the input field being updated*/
    this.setState({
      fields: newFields
    })
  }



handleSubmit = e => {
    // console.log(this.props)
    e.preventDefault();
    // console.log(this.state.fields);
    fetch('http://localhost:3000/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({error: true})
      }
      else {
        this.props.handleUserLogin(res)
        this.props.history.push("/userpage")
      }
    })
    this.setState({initialState})
  };


  render() {
    const { fields } = this.state
    return (
      <div>
        <div className="container">
            {
              this.state.error &&
              <div className="ui error message">
                Try Again
              </div>
            }
          <div className="wrapper">

            <form onSubmit={this.handleSubmit}>
              <div className="form-element">
                <label>Username</label>
                <span><i className="fa fa-envelope"></i></span>
                <input
                  name="username"
                  placeholder="username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <label>Password</label>
                <span><i className="fa fa-envelope"></i></span>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
