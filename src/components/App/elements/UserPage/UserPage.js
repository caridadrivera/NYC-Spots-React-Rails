import React from 'react';
import Post from '../Posts/Post';
// import PostFrom from './Posts/PostFrom';

class UserPage extends React.Component {


state = {
      posts: [],
  }

componentWillMount() {
      fetch('http://localhost:3000/api/v1/posts')
        .then(res => res.json())
        .then(data => this.setState({
          posts: data
        }))
    }




  render() {
  // debugger
    const postItems = this.state.posts

    return(

      <div>
          { this.props.currentUser  ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null }
          {<Post currentUser={this.props.currentUser}
                 postItems={postItems}
                 onClick={()=> this.props.onLikeClick}/>}
      </div>
    )
  }

}


export default UserPage;
