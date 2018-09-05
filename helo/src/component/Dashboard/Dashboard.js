import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      postsData: []
    }
  }

  componentDidMount(){
    Axios.get('/api/posts')
      .then(response => {
        console.log(response.data);
        this.setState({ postsData: response.data});
      })
      .catch(err => console.log(err.message));
  }

  render(){
    let { postsData } = this.state;

    let posts = postsData.map((post, i) => (
      <Link to={`/post/${post.post_id}`}><div className="mini-post" key={i}>
        <h2>{post.title}</h2>
        <div className="profile-box">
          <span>by {post.username}</span>
          <img src={`https://robohash.org/${post.username}`} alt="author_pic"/>
        </div>
      </div></Link>
    ))

    return (
      <div className="dashboard right-of-nav">
        
        <div className="search-box box">

          <div className="search-bar">
            <input type="text" placeholder="Search by Title" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11QULzZDQtTl7erLYkx-P8B6MQ7IvDv5somwpCG6SPBfpCdKo" alt="search_icon"/>
            <button>Reset</button>
          </div>

          <div className="check-box">
            <p>My Posts</p>
              <input className="chck" type="checkbox"/>
          </div>
        </div>

        <div className="posts-box box">
          { posts }
        </div>
      </div>
    )
  }
}
