import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'
import PostCard from '../PostCard/PostCard'



class Post extends React.Component {


state = {
  count: 0,
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
      .then((like) => {
        if (like.user_id === userid && like.post_id === postid) {
          this.setState( {
          count: this.state.count + 1
          })
       // console.log(this.state.count)
        }
      })

     }


render() {

const likes = this.state.count
// console.log(likes)

const posts = this.props.postItems.map(post =>
  <PostCard post={post}
            onLikeClick={this.onLikeClick}
            currentUser={this.props.currentUser}
            likes={post.likes}
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
