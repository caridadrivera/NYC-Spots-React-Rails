import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'
import PostCard from '../PostCard/PostCard'



class Post extends React.Component {



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
        this.props.handlePostDelete(postid)
    //call function from parent in here and pass the id
       }



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
const posts = this.props.postItems.map(post =>
  <PostCard post={post}
            onLikeClick={this.onLikeClick}
            currentUser={this.props.currentUser}
            likes={post.likes}
            handleDelete={this.handleDelete}
             />
  )


    return (

      <div >
        <h1> Posts</h1>
        {posts}
      </div>
    );

  }

}



export default Post;
