import React from 'react';
import Post from '../Posts/Post';
import PostForm from '../Posts/PostForm';
import './UserPage.css'
import CurrentUserPosts from '../CurrentUserPosts/CurrentUserPosts';

class UserPage extends React.Component {


state = {
    posts: [],
    open: false,
    postlikes: 0
  }


componentDidMount() {
  const token = localStorage.getItem("token")
  if (!token) {
    this.props.history.push("signin")
  } else {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          posts: data.sort((a, b) => b.likes.length - a.likes.length)
        })


      })
  }
}

addNewPost = (newPost) => {
  this.setState({posts: [newPost, ...this.state.posts]})
}


handleLike = (likeObj) => {
  const likedPost = this.state.posts.find(post => likeObj.post_id === post.id)
  likedPost.likes.push(likeObj)
  const updatedPosts= this.state.posts.map(post => post.id === likeObj.post_id ? likedPost : post)
  this.setState({posts: updatedPosts})
}


///prevent user from liking their own post
//if clicked post_id === currentUser.post.id : dont let them clicke


handlePostDelete = (postid) => {
const updatedPosts = this.props.currentUser.posts.filter(post => post.id !== postid)
console.log(updatedPosts);
  this.setState({
    posts: updatedPosts
  })
}



onOpenModal = () => {
  this.setState({ open: true });
    };


onCloseModal = () => {
  this.setState({ open: false });
    };


  render() {
    const open  = this.state.open
    const postItems = this.state.posts
 // console.log("current user", this.props.currentUser)
 // debugger
    return (
    <div id="home">
      <div className="nav">
        <ul className="main-nav">
        <li className="title">Welcome!</li>
        <li><a className="home-btn nav-item"  onClick={this.props.handleLogout}>
          { this.props.currentUser  ?
              <h1> LogOut </h1>
            : null }
        </a></li>
          </ul>

        </div>

          {<PostForm postItems={postItems}
                       currentUser={this.props.currentUser}
                       open={open}
                       addNewPost={this.addNewPost}
                       onOpenModal={this.onOpenModal}
                       onCloseModal={this.onCloseModal}/>  }

          {<CurrentUserPosts currentUser={this.props.currentUser} />}

          {<Post currentUser={this.props.currentUser}
                handlePostDelete={this.handlePostDelete}
                 postItems={postItems}
                 handleLike={this.handleLike}
                 onClick={()=> this.props.onLikeClick}/>}
      </div>

    )
  }

}


export default UserPage;
