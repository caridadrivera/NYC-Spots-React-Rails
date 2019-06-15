import React from 'react';
import Post from '../Posts/Post';
// import PostFrom from './Posts/PostFrom';

class UserPage extends React.Component {


state = {
      posts: [],
  }

componentWillMount() {
  const token = localStorage.getItem("token")
  if (!token) {
    this.props.history.push("signin")
  } else {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          posts: data.sort((a, b) => b.likes.length - a.likes.length)
        })
      })
  }
}




  render() {
  // debugger
    const postLikes = this.state.posts.map(post =>{
      return post.likes
    })

    // console.log(postLikes)
    const postItems = this.state.posts
    return(

      <div>
          { this.props.currentUser  ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null }
          {<Post currentUser={this.props.currentUser}
                 postItems={postItems}
                 postLikes={postLikes}
                 onClick={()=> this.props.onLikeClick}/>}
      </div>
    )
  }

}


export default UserPage;
