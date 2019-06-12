import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render() {

    return (
      <div className="menu">
      <Link
        className='item'
        to="/about"
        />
        {
          this.props.currentUser &&
          <div className="item">
            {`Welcome ${this.props.currentUser.username}`}
          </div>
        }

      </div>
    )
  }
}

export default NavBar
