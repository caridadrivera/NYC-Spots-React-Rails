import React from 'react';

class Post extends React.Component {

  state = {
    posts: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => this.setState({
        posts: data
      }))
  }



  render() {
    // console.log(background)
    console.log(this.state)
const postItems = this.state.posts.map(post => (
  <div key={post.id}>
  <h3> {post.title} </h3>
  <p> {post.image_url} </p>
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
