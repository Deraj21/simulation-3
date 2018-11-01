import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import Axios from 'axios';

class Nav extends Component {
  
  componentDidMount(){
    Axios.get('/api/currentUser')
      .then( response => {
        let { username, user_id, profile_pic } = response.data;
        console.log({username, user_id, profile_pic});
        this.props.updateUser(user_id, username, profile_pic);
      })
      .catch( err => console.log(err.message));
  }

  logout(){
    Axios.post('/api/auth/logout')
      .then(response => console.log(response.data))
      .catch(err => console.log(err.message));
  }

  render() {
    let { location, username, profile_pic } = this.props;
    if (location.pathname !== "/") {
      return (
        <div className="nav"><div className="flex-container">
          <div className="profile logo">
            <img src={profile_pic} alt="profile"/>
            <p>{username}</p>
          </div>
          <Link to="/dashboard"><div className="home-logo logo"></div></Link>
          <Link to="/new"><div className="new-logo logo"></div></Link>
          <Link onClick={() => this.logout()} to="/"><div className="shut-down logo"></div></Link>
        </div></div>
      );
    }
    else {
      return (
        false
      );
    }
  }
}

function mapStateToProps(state){
  let { username, profile_pic } = state;
  return { username, profile_pic };
}

export default connect(mapStateToProps, { updateUser })(Nav);