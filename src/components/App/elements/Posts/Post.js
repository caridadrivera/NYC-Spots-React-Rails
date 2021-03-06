import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'
import PostCard from '../PostCard/PostCard'


class Post extends React.Component {

state = {
  liked: false
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
        console.log("likeObj:", res)
        console.log("likebutton state:", this.state.liked)
        console.log("post id", postid);
        console.log("current userID", this.props.currentUser.id)
        this.props.handleLike(res)
        if (this.props.currentUser.id === res.user_id) {
          this.setState({liked: true})
        } 
      })

   }

render() {
console.log(this.state.liked)

const currentUserPosts = this.props.currentUser ? this.props.postItems.filter(post => post.user_id !== this.props.currentUser.id) : []
const posts = currentUserPosts.map(post =>

     <PostCard post={post}
            onLikeClick={this.onLikeClick}
            currentUser={this.props.currentUser}
            likes={post.likes}
            liked={this.state.liked}
            handleDelete={this.props.handleDelete}
             />
      )
    return (

<div className="posts">
  <h2> Reviewed Spots </h2>
  <div className="grid">
       {posts}
    </div>
</div>
  )

  }

}



export default Post;
