import React from 'react';
import SignIn from '/Users/caridadrivera/ive-been-there/src/components/auth/SignIn/SignIn.js';
import SignUp from '/Users/caridadrivera/ive-been-there/src/components/auth/SignUp/SignUp'
import './LogginPage.css';
let setUser;


class LogginPage extends React.Component {



  render() {
    // console.log(background)

    return (
      <div className="home">
        <SignIn />
      </div>



    );
  }

}


export default LogginPage;
