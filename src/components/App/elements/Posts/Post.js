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
    console.log(this.state)
const postItems = this.state.posts.map(post => (
  <div key={post.id}>
  <h3> {post.title} </h3>
  <img src={post.image_url}/>
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


// <div class="cards clearfix">
//   <div class="card-col-1"></div>
//   <div class="card-col-2"></div>
//   <div class="card-col-3"></div>
// </div>


export default Post;
