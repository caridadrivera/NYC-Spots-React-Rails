import React from 'react';
import Post from '../Posts/Post';
import PostForm from '../Posts/PostForm';
import { withRouter } from 'react-router-dom';
import './UserPage.scss'
import CurrentUserPosts from '../CurrentUserPosts/CurrentUserPosts';

class UserPage extends React.Component {


state = {
    posts: [],
    open: false,
    likebutton: true
  }


componentDidMount() {
  const token = localStorage.getItem("token")
  if (!token) {
    this.props.history.push("/signin")
  } else {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(this.props)
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

//user should only be able to delete its own posts
///prevent user from liking their own post
//if clicked post_id === currentUser.post.id : dont let them clicke


handlePostDelete = (postid) => {
const updatedPosts = this.state.posts.filter(post => post.id !== postid)
// console.log(updatedPosts);
  this.setState({
    posts: updatedPosts
  })
}






handleDelete = (postid) => {
  console.log("coming through", postid)
  fetch(`http://localhost:3000/api/v1/posts/${postid}`, {
    method: 'DELETE',
    headers: {
          'Content-Type': 'application/json',
           Accept: 'application/json'
               },
    body: JSON.stringify({
    id: postid})
         })
        this.handlePostDelete(postid)
    //call function from parent in here and pass the id
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
    // const currentUser = this.props.currentUser.username
    const userPosts = this.props.currentUser ? this.props.currentUser.posts : []
  // console.log("current user post", userPosts)
 // debugger
    return (


<div>
<div class="drink">
    <a href="http://www.animatedimages.org/cat-foods-and-drinks-298.htm"><img src="http://www.animatedimages.org/data/media/298/animated-eat-and-drink-image-0018.gif" border="0" alt="animated-eat-and-drink-image-0018" /></a>
</div>

    <nav class="navbar navbar-default navbar-fixed-top">
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right" onClick={this.props.handleLogout}>
            <a>{ this.props.currentUser  ?
                <h1> LogOut </h1>
              : null }</a>
          </ul>
      </div>
    </nav>

        {<PostForm postItems={postItems}
                       currentUser={this.props.currentUser}
                       open={open}
                       addNewPost={this.addNewPost}
                       onCloseModal={this.onCloseModal}/>  }

          {<CurrentUserPosts currentUser={this.props.currentUser}
                            userPosts={userPosts}
                            postItems={postItems}
                            onOpenModal={this.onOpenModal}
                            handleDelete={this.handleDelete}
                          />}

          {<Post currentUser={this.props.currentUser}
                 postItems={postItems}
                 handleLike={this.handleLike}
                 userPosts={this.userPosts}
                 onClick={()=> this.props.onLikeClick}/>}
  </div>
    )
  }

}


export default withRouter(UserPage);
