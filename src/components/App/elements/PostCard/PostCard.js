import React from 'react';
import './PostCard.css'

class PostCard extends React.Component {

render() {




  // console.log(this.props.likes.length)
  const likes = this.props.likes.length
  const post = this.props.post
  return(
    (
      <main class="main-area">

        <div class="centered">

          <section class="cards">

            <article key={post.id} class="card">
              <a href="#">
                <figure class="thumbnail">
                <img src={post.image_url} />
                </figure>
                <div class="card-content">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                    <span class="left floated">
                      <i class="heart outline like icon" onClick={() => this.props.onLikeClick(post.id, this.props.currentUser.id)}> Likes: {likes} </i>
                    </span>

                </div>
              </a>
            </article>

          </section>

        </div>
      </main>
    )
  )
}

}



export default PostCard;
