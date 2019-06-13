import React from 'react';
import './Post.css'



class Post extends React.Component {

  state = {
    posts: [],
    currentUser: {}
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => this.setState({
        posts: data
      }))
  }


// post.filter( post => post.user_id == )
  render() {
// console.log(background)
// console.log(this.state)
const postItems = this.state.posts.map(post => (
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
        <i class="heart outline like icon"></i>
      </span>
    <div class="description">
      {post.content}
    </div>
    </div>
  </div>

  ))
    return (
      <div>
        <h1> Posts</h1>
        {postItems}
      </div>
    );
  }

}



export default Post;
