import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'
// import LikeButton from '../LikeButton/LikeButton'


class Post extends React.Component {


state = {
  count: 0,
  color: null
}



componentDidMount() {
  let likeCount= localStorage.setItem('count', this.state.count + 1)
  this.setState({
    count: likeCount
  })
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
          return this.state.count
        }
      })

     }


render() {

  const posts = this.props.postItems.map(post =>
    (
     <div key={post.id} class= "ui card">
      <div class="content">
          <div class="post-content"> {post.title} </div>
          <div class="right floated meta">{}</div>
          <img class="ui avatar image" src={post.user}/>
      </div>
      <div class="image">
        <img src={post.image_url}/>
      </div>
      <div class="content">
        <span class="left floated">
          <i class="heart outline like icon" onClick={() => this.onLikeClick(post.id, this.props.currentUser.id)} likes={this.state.count} > Likes: {this.state.count}</i>
        </span>
      <div class="description">
        {post.content}
      </div>
      </div>
    </div> )
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
