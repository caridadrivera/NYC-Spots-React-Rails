import React from 'react';
import PostCard from '../PostCard/PostCard';

class CurrentUserPosts extends React.Component {

render () {


  const userPosts = this.props.currentUser ? this.props.postItems.filter(post => post.user_id === this.props.currentUser.id) : []
  return (
    <div>
  {userPosts.map(post => <PostCard post={post} likes={post.likes} currentUser={this.props.currentUser}/>)}
    </div>
  )

}


}

export default CurrentUserPosts;
