import React from 'react';
import Post from '../Posts/Post';
// import PostFrom from './Posts/PostFrom';

class UserPage extends React.Component {



  render() {
    return(
      <div>
          { this.props.currentUser  ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null }

      { <Post/>}

      </div>
    )
  }

}


export default UserPage;
