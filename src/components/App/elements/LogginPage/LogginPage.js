import React from 'react';
import SignIn from '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignIn/SignIn'
// import SignUp from '/Users/caridadrivera/ive-been-there/src/components/auth/SignUp/SignUp'
import './LogginPage.css';


class LogginPage extends React.Component {



  render() {
  // console.log(this.props)
    return (
      <div className="home">
        <SignIn handleUserLogin={this.props.handleUserLogin} />
      </div>

    );
  }

}


export default LogginPage;
