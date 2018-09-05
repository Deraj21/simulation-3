import React, { Component } from 'react';
import Axios from 'axios';
import './Post.css';

export default class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      postData: {
        title: '',
        img: '',
        content: '',
        user_id: null,
        username: ''
      }
    }
  }

  componentDidMount(){
    let { postid } = this.props.match.params;
    Axios.get(`/api/post/${postid}`)
      .then(response => this.setState({ postData: response.data[0] }))
      .catch(err => console.log(err.message));
  }

  render(){
    const { title, img, content, user_id, username } = this.state.postData;

    return (
      <div className="post right-of-nav">
        <div className="upper">
          <h1>{title}</h1>
          <div className="profile-box">
            <span>by {username}</span>
            <img src={`https://robohash.org/${username}`} alt="author_pic"/>
          </div>
        </div>
        <div className="lower">
          <img src={img} />
          <p>{content}</p>
        </div>
      </div>
    )
  }
}