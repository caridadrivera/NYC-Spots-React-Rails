import React from 'react';
import { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import LogginPage from './components/App/elements/LogginPage/LogginPage';
import Post from './components/App/elements/Posts/Post'
import SignIn from './components/auth/SignIn/SignIn'
import SignUp from './components/auth/SignUp/SignUp'

import NavBar from './components/App/elements/NavBar/NavBar'
import UserPage from './components/App/elements/UserPage/UserPage'


class App extends React.Component {

  state = {
    currentUser: null
  }


  componentDidMount() {
    const token = localStorage.getItem("token")
  }

 handlePageClick = (page) => {
   this.setState({ page })
 }


 handleUserLogin = (user) => {
   localStorage.setItem("token", user.id)
   this.setState({currentUser: user})
 }

 handleLogout = () => {
   localStorage.removeItem("token")
   this.setState({currentUser: null})
   this.props.history.push("/")
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
        <NavBar
          handlePageClick={this.handlePageClick}
        />

        <div className="ui container">
          <Switch>
              <Route exact path="/" render={() => {
                return <LogginPage handleUserLogin={this.handleUserLogin}/>}
              }
              />
              <Route path="/userpage" render={() => {
                return <UserPage currentUser={this.state.currentUser} handleLogout={this.handleLogout} />}
              }
              />
              <Route component={SignUp} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App);
