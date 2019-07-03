import React from 'react';
import './PostCard.css'

class PostCard extends React.Component {

render() {


   console.log(!this.props.liked)
  const likes = this.props.likes.length
  const post = this.props.post


  return(

      <article>
        <img src={post.image_url} />
            <div className="text">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
                    {this.props.currentUser && post.user_id === this.props.currentUser.id ?
                      (
                    <button onClick={()=>this.props.handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                  ):  this.props.liked (
                      <span className="left floated">
                          <i className="heart outline like icon" onClick={() => this.props.onLikeClick(post.id, this.props.currentUser.id)}> Likes: {likes} </i>
                      </span>
                    )}
            </div>
          </article>



  )
}

}



export default PostCard;
