import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {

  // console.log(props);

  if (props.location.pathname !== "/") {
    return (
      <div className="nav"><div className="flex-container">
        <div className="profile logo">
          <img src={props.profile_pic} alt="profile-pic"/>
          <p>{props.username}</p>
        </div>
        <Link to="/dashboard"><div className="home-logo logo"></div></Link>
        <Link to="/new"><div className="new-logo logo"></div></Link>
        <Link to="/"><div className="shut-down logo"></div></Link>
      </div></div>
    );
  }
  else {
    return (
      false
    );
  }
}

function mapStateToProps(state){
  let { username, profile_pic } = state;
  return { username, profile_pic };
}

export default connect(mapStateToProps)(Nav);