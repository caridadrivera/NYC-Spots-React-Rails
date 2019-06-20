import React from 'react';
import PostCard from '../PostCard/PostCard';

class CurrentUserPosts extends React.Component {

render () {

  const userPosts = this.props.currentUser ? this.props.postItems.filter(post => post.user_id === this.props.currentUser.id) : []

  const renderPosts = userPosts.map(post =>
            <PostCard post={post} likes={post.likes}
                          currentUser={this.props.currentUser}
                          handleDelete={() => this.props.handleDelete(post.id)}/>)

  return (

<div className="posts">
  <h2>Your Spots </h2>   <button class="button" onClick={this.props.onOpenModal}>add Post</button>
    <main className="grid">
        {renderPosts}
    </main>
</div>
  )



}


}

export default CurrentUserPosts;
