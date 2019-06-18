import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'
import PostCard from '../PostCard/PostCard'



class Post extends React.Component {


onLikeClick= (postid, userid) => {
    // console.log("Am I here??", postid, userid)
    fetch('http://localhost:3000/api/v1/likes', {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json'
                 },
      body: JSON.stringify({user_id: this.props.currentUser.id,
      post_id: postid})
           })
      .then(res => res.json())
      .then(res => {
        console.log("likes", res)
        this.props.handleLike(res)
      })
   }

render() {
// console.log(likes)
const currentUserPosts = this.props.currentUser ? this.props.postItems.filter(post => post.user_id !== this.props.currentUser.id) : []
const posts = currentUserPosts.map(post =>
  <PostCard post={post}
            onLikeClick={this.onLikeClick}
            currentUser={this.props.currentUser}
            likes={post.likes}
            handleDelete={this.props.handleDelete}
             />
  )

    return (

      <div>
        <h1> Posts</h1>

        {posts}
      </div>
    );

  }

}



export default Post;
