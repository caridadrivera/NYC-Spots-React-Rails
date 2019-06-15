import React from 'react';



class PostCard extends React.Component {

render() {
  // console.log(this.props.likes.length)
  const likes = this.props.likes.length
  const post = this.props.post
  return(
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
      <div class="content" onClick={() => this.props.onLikeClick(post.id, this.props.currentUser.id)}>
        <span class="left floated">
          <i class="heart outline like icon"> Likes: {likes} </i>
        </span>
      <div class="description">
        {post.content}
      </div>
      </div>
    </div> )
  )
}

}



export default PostCard;
