import React from 'react'
import { withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


const initialState = {
  fields: {
    title: "",
    image_url: "",
    content: "",
  }
}

class PostForm extends React.Component {


  constructor() {
    super();
    this.state = initialState
  }


  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value};
    // console.log(e)
    /*I want the id of the input field being updated*/
    this.setState(prevState => {
      return {
        fields: newFields
      }
    })
  }


  handleSubmit = (e) => {
    const newPost = this.state
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({user_id: this.props.currentUser.id,
                              title: this.state.fields.title,
                              content: this.state.fields.content,
                              image_url: this.state.fields.image_url })
      })
      .then(res => res.json())
      .then(res => {
        console.log("posttting", res)
        this.setState(prevState => {
          return {
            posts: [
              newPost
            ]
          }
        })
      }
    )
  }


  render() {

   // console.log(this.props)
    const {fields} = this.state
    return (
      <div>
      <button onClick={this.props.onOpenModal}>add Post</button>
    <Modal open={this.props.open} onClose={this.props.onCloseModal} center >
      <form
        className="ui form"
        onSubmit={this.handleSubmit}
      >
        <div className="field">
          <label>Title</label>
          <input placeholder="title" name="title" value={fields.title} onChange={this.handleChange} type="text"/>
        </div>
        <div className="field">
          <label>Review</label>
          <input name="content" value={fields.content} onChange={this.handleChange} type="text" />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input name="image_url" value={fields.image_url} onChange={this.handleChange} type="text" />
        </div>
        <button className="ui positive basic button">Add Post</button>
      </form>
    </Modal>
    </div>
    )
  }
}

export default withRouter(PostForm)
