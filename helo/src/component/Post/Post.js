import React, { Component } from 'react';

export default class Post extends Component {

  render(){
    const { postid } = this.props.match.params;

    return (
      <div className="post right-of-nav">
        <h2>Post {postid}</h2>
      </div>
    )
  }
}