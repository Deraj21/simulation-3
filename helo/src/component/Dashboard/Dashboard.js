import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      postsData: [],
      searchTerm: '',
      filterBySearch: false,
      filterByUser: true
    }

    this.getPosts = this.getPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.search = this.search.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  getPosts(){
    Axios.get('/api/posts')
      .then(response => {
        this.setState({ postsData: response.data});
      })
      .catch(err => console.log(err.message));
  }

  componentDidMount(){
    this.getPosts();
  }

  handleChange(e){
    this.setState({ searchTerm: e.target.value });
  }

  handleCheckChange(e){
    let temp = true;
    if (this.state.filterByUser){
      temp = false;
    }
    this.setState({ filterByUser: temp });
  }

  resetSearch(){
    this.getPosts();
    this.setState({ searchTerm: '', filterBySearch: false });
  }

  search(){
    this.setState({ filterBySearch: true });
  }

  render(){
    let { postsData, searchTerm, filterBySearch, filterByUser } = this.state;
    let { username } = this.props;
    if (filterBySearch){
      postsData = postsData.filter(post => post.title.includes(searchTerm));
    }
    if (filterByUser){
      postsData = postsData.filter(post => post.username !== username);
    }

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
            <input type="text" placeholder="Search by Title" value={searchTerm} onChange={e => this.handleChange(e)} />
            <img onClick={() => this.search() } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11QULzZDQtTl7erLYkx-P8B6MQ7IvDv5somwpCG6SPBfpCdKo" alt="search_icon"/>
            <button onClick={() => this.resetSearch() }>Reset</button>
          </div>

          <div className="check-box">
            <p>My Posts</p>
              <input onChange={e => this.handleCheckChange(e)} className="chck" type="checkbox"/>
          </div>
        </div>

        <div className="posts-box box">
          { posts }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  let { username } = state;
  return {
    username
  }
}

export default connect(mapStateToProps)(Dashboard);