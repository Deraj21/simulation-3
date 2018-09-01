import React, { Component } from 'react';
import './Dashboard.css';

const POSTS_DATA = [
  {
    user_id: 1,
    user_name: 'test1',
    post_title: 'Ducks',
    post_text: '',
    post_image_url: ''
  },
  {
    user_id: 2,
    user_name: 'be_the_bert',
    post_title: 'Testing',
    post_text: '',
    post_image_url: ''
  },
  {
    user_id: 1,
    user_name: 'test1',
    post_title: 'Games',
    post_text: 'Games are cool',
    image_url: 'http://bdfjade.com/data/out/121/6242464-imagens-de-games.png'
  }
];

export default class Dashboard extends Component {

  render(){

    let posts = POSTS_DATA.map(post => (
      <div className="post">
        <h2>{post.post_title}</h2>
        <div className="profile-box">
          <span>by {post.user_name}</span>
          <img src={`https://robohash.org/${post.user_name}`}/>
        </div>
      </div>
    ))

    return (
      <div className="dashboard right-of-nav">
        
        <div className="search-box box">

          <div className="search-bar">
            <input type="text" placeholder="Search by Title" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11QULzZDQtTl7erLYkx-P8B6MQ7IvDv5somwpCG6SPBfpCdKo" />
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
