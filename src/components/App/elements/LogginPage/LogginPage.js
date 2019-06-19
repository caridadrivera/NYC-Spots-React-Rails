import React from 'react';
import SignIn from '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignIn/SignIn'
import SignUp from '/Users/caridadrivera/react-final-Travelgram/src/components/auth/SignUp/SignUp'
import './LogginPage.scss';


class LogginPage extends React.Component {




  render() {
  // console.log(this.props)


    return (
    <div class="all">
      <label class="modal-btn" for="modal-toggle">Click me</label>

      <input id="modal-toggle" type="checkbox"/>
      <label class="modal-backdrop" for="modal-toggle"></label>
      <div class="modal-content">
          <label class="modal-close-btn" for="modal-toggle">
            <svg width="50" height="50">
              <line x1="10" y1="10" x2="40" y2="40"/>
              <line x1="40" y1="10" x2="10" y2="40"/>
            </svg>
          </label>
          <div class="tabs">
              <input class="radio" id="tab-1" name="tabs-name" type="radio" checked/>
              <label for="tab-1" class="table"><span>Login</span></label>
              <div class="tabs-content">
                 <div class="login_socnet">
                 </div>
              {<SignIn handleUserLogin={this.props.handleUserLogin} />}
              </div>

        <input class="radio" id="tab-2" name="tabs-name" type="radio"/>
        <label for="tab-2" class="table"><span>Sign up</span></label>
        <div class="tabs-content">
            <div class="login_socnet">
           </div>
           {<SignUp handleSignUp={this.props.handleSignUp}/>}
        </div>
      </div>
    </div>
</div>

    );
  }

}


export default LogginPage;
