import React from 'react';
import { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import LogginPage from './components/App/elements/LogginPage/LogginPage';
import Post from './components/App/elements/Posts/Post'
import SignIn from './components/auth/SignIn/SignIn'
import NavBar from './components/App/elements/NavBar/NavBar'
import UserPage from './components/App/elements/UserPage/UserPage'


class App extends React.Component {

  state = {
    currentUser: null
  }

 handlePageClick = (page) => {
   this.setState({ page })
 }


 handleUserLogin = (user) => {
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
      console.log(this.state)
    return (

      <Fragment>
        <NavBar
          title={this.props.title}
          handlePageClick={this.handlePageClick}
          currentUser={this.state.currentUser}
        />

        <div className="ui container">
          <Switch>

            <Route exact path="/" render={() => {
              return <LogginPage handleUserLogin={this.handleUserLogin}/>}
            }
            />
            <Route path="/userpage" component={UserPage} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default App;
