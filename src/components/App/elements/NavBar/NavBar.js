import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {

    return (
      <div className="menu">
        {
          this.props.currentUser &&
          <div className="item">
            {`Welcome ${this.props.currentUser.username}`}
          </div>
        }
        <div className="item">


            {  this.props.currentUser ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null}


        </div>

      </div>
    )
  }
}

export default NavBar
