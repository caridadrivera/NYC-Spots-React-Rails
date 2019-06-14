import React from 'react';
import Post from '../Posts/Post';
// import PostFrom from './Posts/PostFrom';

class UserPage extends React.Component {

  state = {
      posts: [],
    }


  componentWillMount() {
      fetch('http://localhost:3000/api/v1/posts')
        .then(res => res.json())
        .then(data => this.setState({
          posts: data
        }))
    }




  render() {

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
            <i class="heart outline like icon" onLikeClick={this.onLikeClick}></i>
          </span>
        <div class="description">
          {post.content}
        </div>
        </div>
      </div> ))

    return(

      <div>
          { this.props.currentUser  ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div> : null }
          {<Post currentUser={this.props.currentUser}
                 onLikeClick={this.onLikeClick}
                 postItems={postItems}/>}
      </div>
    )
  }

}


export default UserPage;
