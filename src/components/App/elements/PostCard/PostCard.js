import React from 'react';
import './PostCard.css'

class PostCard extends React.Component {

render() {




  // console.log(this.props.likes.length)
  const likes = this.props.likes.length
  const post = this.props.post

  return(
    (
      <main className="main-area">
        <div className="centered">
          <section className="cards">
            <article key={post.id} class="card">
                <figure class="thumbnail">
                <img src={post.image_url} />
                </figure>
              <div class="card-content">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div class="heart">
                    <span class="left floated">
                      <i class="heart outline like icon" onClick={() => this.props.onLikeClick(post.id, this.props.currentUser.id)}> Likes: {likes} </i>
                    </span>
                  </div>
              <div class="delete-button">
                <button onClick={()=> this.props.handleDelete(post.id) } className="btn btn-danger btn-sm">Delete</button>
              </div>
          </div>
        </article>

          </section>

        </div>
      </main>
    )
  )
}

}



export default PostCard;
