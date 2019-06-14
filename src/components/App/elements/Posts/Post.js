import React from 'react';
import './Post.css'
import UserPage from '../UserPage/UserPage'

class Post extends React.Component {


  onLikeClick= (id) => {
    console.log("Am I here??", id)
    fetch('http://localhost:3000/api/v1/likes', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json'
           },
        body: JSON.stringify({user_id: this.props.currentUser.id},
        {post_id: this.state.post.id})
         })
   }

render() {
// post.filter( post => post.user_id == )
// console.log(this.props)
// console.log(background)
// console.log(this.state)


    return (
      <div>
        <h1> Posts</h1>
        {this.props.postItems}
      </div>
    );
  }

}



export default Post;
