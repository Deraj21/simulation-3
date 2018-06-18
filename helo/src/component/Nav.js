import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  if (props.location.pathname !== "/") {
    return (
      <div className="nav">
        <Link to="/dashboard"><div className="home-logo logo"></div></Link>
        <Link to="/new"><div className="new-logo logo"></div></Link>
        <Link to="/"><div className="shut-down logo"></div></Link>
      </div>
    );
  }
  else {
    return (
      false
    );
  }
}
