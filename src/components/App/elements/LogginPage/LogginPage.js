import React from 'react';
import SignIn from '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignIn/SignIn'
import SignUp from '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignUp/SignUp'
import './LogginPage.css';


class LogginPage extends React.Component {


  render() {
  // console.log(this.props)
    return (

        <div className="login-view-toggle">
          <div className="sign-up-toggle is-active">Don't have an account? <SignUp/></div>
          <div className="login-toggle">Already have an account? <SignIn handleUserLogin={this.props.handleUserLogin} /></div>
          </div>


    );
  }

}


export default LogginPage;
