import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTitle, updateURL, updateContent } from '../../ducks/reducer';

class Form extends Component {

  post(){

    let { title, url, content, id } = this.props;
    if (!id){
      alert('Please login before posting');
    }
    Axios.post('/api/post', { title, img: url, content, author_id: id })
      .then(() => console.log('posted'))
      .catch(err => err.message);
  }

  render(){

    let { url } = this.props;
    if (!url) {
      url = 'https://via.placeholder.com/400x250'
    }

    return (
      <div className="form right-of-nav">
        <h1>NEW POST</h1>
        
        <div className="middle">
          <p>Title:</p>
          <input type="text" onChange={e => this.props.updateTitle(e.target.value)}/>
          
          <img src={url} className="input-img" alt="loading image"/>
          
          <p>Image URL:</p>
          <input type="text" onChange={e => this.props.updateURL(e.target.value)}/>
          
          <p>Content:</p>
          <textarea onChange={e => this.props.updateContent(e.target.value)}/>
        </div>

        <div className="btn-box">
          <Link to="/dashboard">
            <button onClick={() => this.post()}>Post</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  let { id, title, url, content } = state;
  return {
    id,
    title,
    url,
    content
  };
}

export default connect(mapStateToProps, { updateTitle, updateURL, updateContent })(Form);