import React, { Component } from 'react';

export default class Form extends Component {

  render(){

    return (
      <div className="form right-of-nav">
        <h1>NEW POST</h1>
        
        <div className="middle">
          <p>Title:</p>
          <input type="text" />
          
          <div className="input-img" />
          
          <p>Image URL:</p>
          <input type="text" />
          
          <p>Content:</p>
          <textarea />
        </div>

        <div className="btn-box">
          <button>Post</button>
        </div>
      </div>
    )
  }
}