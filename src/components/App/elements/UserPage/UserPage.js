import React from 'react';
import Post from '../Posts/Post';
import PostForm from '../Posts/PostForm';
import './UserPage.css'
import CurrentUserPosts from '../CurrentUserPosts/CurrentUserPosts';
import Modal from 'react-responsive-modal';

class UserPage extends React.Component {


state = {
    posts: [],
    open: false
  }


componentDidMount() {
  const token = localStorage.getItem("token")
  if (!token) {
    this.props.history.push("signin")
  } else {
    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          posts: data.sort((a, b) => b.likes.length - a.likes.length)
        })
      })
  }
}


onOpenModal = () => {
  this.setState({ open: true });
    };


onCloseModal = () => {
  this.setState({ open: false });
    };


  render() {
    const open  = this.state.open
    const postItems = this.state.posts
 // console.log("current user", this.props.currentUser)
 // debugger
    return (
    <div id="home">
      <div className="nav">
        <ul className="main-nav">
        <li className="title">Welcome!</li>
        <li><a className="home-btn nav-item"  onClick={this.props.handleLogout}>
          { this.props.currentUser  ?
              <h1> LogOut </h1>
            : null }
        </a></li>
          </ul>

        </div>

            {<PostForm postItems={postItems}
                       currentUser={this.props.currentUser}
                       open={open}
                       onOpenModal={this.onOpenModal}
                       onCloseModal={this.onCloseModal}/>  }

          {<CurrentUserPosts currentUser={this.props.currentUser} />}

          {<Post currentUser={this.props.currentUser}
                 postItems={postItems}
                 onClick={()=> this.props.onLikeClick}/>}
      </div>

    )
  }

}


export default UserPage;
