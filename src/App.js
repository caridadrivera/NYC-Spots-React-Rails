import React from 'react';
import './index.css'
import { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import LogginPage from './components/App/elements/LogginPage/LogginPage';
import Post from './components/App/elements/Posts/Post'
import SignIn from './components/auth/SignIn/SignIn'
import SignUp from './components/auth/SignUp/SignUp'
import UserPage from './components/App/elements/UserPage/UserPage'
import '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignIn/jquery.js'


class App extends React.Component {

  state = {
    currentUser: null
  }


componentDidMount() {
  const token = localStorage.getItem("token")
  if (token) {
    fetch("http://localhost:3000/api/v1/refresh", {
      headers: {
        Authorization: token
        }
      })
      .then(r => r.json())
      .then((user) => {
        // console.log(user)
        if (!user.error) {
          this.setState({currentUser: user})
          this.props.history.push('/userpage')
        }
      })
    }
  }


 handlePageClick = (page) => {
   this.setState({ page })
 }



 handleUserLogin = (user) => {
   console.log("LOGGED USERR", user)
   localStorage.setItem("token", user.token)
   this.setState({currentUser: user})
 }


 handleLogout = () => {
   localStorage.removeItem("token")
   this.setState({currentUser: null})
   this.props.history.push("/signin")
 }


 handleSignUp = (user) => {
   this.setState({currentUser: user})
 }


 renderPage() {
   switch(this.state.page) {
     case "signin":
       return <SignIn />
     case "add":
     case "all":
       return <Post/>
     default:
       return <LogginPage />
   }
 }

  render() {
    return (

      <Fragment>
          <Switch>
          <div className="home">
              <Route exact path="/signin" render={() => {
                return <LogginPage handleUserLogin={this.handleUserLogin} handleSignUp={this.handleSignUp}/>}
              }
              />
              <Route path="/signup" compontent={SignUp} />
              <Route path="/userpage" render={() => {
                return <UserPage currentUser={this.state.currentUser} handleLogout={this.handleLogout} handlePageClick={this.handlePageClick} />}
              }
              />

            </div>
          </Switch>

      </Fragment>
    )
  }
}

export default withRouter(App);
