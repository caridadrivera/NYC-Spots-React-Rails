import React from 'react';
import { withRouter } from 'react-router-dom'
import './SignUp.sass'
import '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignIn/SignIn.sass'



const initialState = {
  error:false,
  fields: {
    username: '',
    password: ''
  }
}


class SignUp extends React.Component {


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


  handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/v1/users', {
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
          console.log(this.props)
           this.props.handleSignUp(res)
          this.props.history.push("/userpage")
        }
      })
  }


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

            <form onSubmit={this.handleSubmit}>
              <div className="form-element">
                <label>Username</label>
                <span><i class="fa fa-lock"></i></span>
                <input
                  name="username"
                  placeholder="username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <label>Password</label>
                <span><i class="fa fa-lock"></i></span>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn-login">
                SignUp
              </button>
            </form>
          </div>
      </div>
    )
  }
}

export default withRouter(SignUp);
