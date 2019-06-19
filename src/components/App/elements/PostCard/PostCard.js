import React from 'react';
import './PostCard.css'

class PostCard extends React.Component {

render() {


  // console.log(this.props.likes.length)
  const likes = this.props.likes.length
  const post = this.props.post
  return(
    (
    <div class="ui grid">
        <div class="four wide column">
          <div class="ui link cards">
            <div class="card"key={post.id}>
              <div class="image">
                <img src={post.image_url} />
              </div>
              <div class="card-content">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                {this.props.currentUser && post.user_id === this.props.currentUser.id ?
                  (
                    <div class="delete-button">
                      <button onClick={()=>this.props.handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                  ): (
                  <div class="heart">
                    <span class="left floated">
                      <i class="heart outline like icon" onClick={() => this.props.onLikeClick(post.id, this.props.currentUser.id)}> Likes: {likes} </i>
                    </span>
                  </div>
                )}
          </div>

            </div>
          </div>
        </div>
      </div>
    )
  )
}

}



export default PostCard;
