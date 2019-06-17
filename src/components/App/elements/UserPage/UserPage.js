import React from 'react';
import Post from '../Posts/Post';
import PostForm from '../Posts/PostForm';


class UserPage extends React.Component {


state = {
    posts: [],
  }


componentDidMount() {
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
    const postItems = this.state.posts
// console.log(postItems)
    return(

      <div>
          { this.props.currentUser  ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null }

            {<PostForm postItems={postItems} currentUser={this.props.currentUser}/> }

            <div>

          {<Post currentUser={this.props.currentUser}
                 postItems={postItems}
                 onClick={()=> this.props.onLikeClick}/>}

          </div>
      </div>
    )
  }

}


export default UserPage;
