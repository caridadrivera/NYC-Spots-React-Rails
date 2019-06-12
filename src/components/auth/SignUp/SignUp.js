import React from 'react';

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
    console.log(this.props)
    e.preventDefault();
    console.log(this.state.fields);
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
              <div className="input-field">
                <label>Username</label>
                <input
                  name="username"
                  placeholder="username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="ui basic green button">
                SignUp
              </button>
            </form>
          </div>
      </div>
    )
  }
}

export default SignUp;
