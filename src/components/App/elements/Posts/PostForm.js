import React from 'react'
import { withRouter } from 'react-router-dom'
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
       const newPost = res
       this.props.addNewPost(res)
      }
    )
  }





  render() {
//modal doesnt close on submit,
//new likes and new posts are only showed on refresh

   // console.log(this.props)
    const {fields} = this.state
    return (


    <Modal open={this.props.open} center onClose={this.props.onCloseModal} >

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
        <button className="ui positive basic button" onClick={this.props.onCloseModal}>Submit</button>
      </form >
    </Modal >
  
    )
  }
}

export default withRouter(PostForm)
