import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { updateUser } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlClick = this.handleClick.bind(this);
  }

  handleChange(val, data){
    let { state } = this;
    for (let key in state){
      if (data === key){
        let obj = {};
        obj[key] = val;
        this.setState(obj);
      }
    }
  }

  handleClick(key){
    let { username, password } = this.state;
    switch(key){
      case 'login':
        Axios.post('/api/auth/login', { username, password })
          .then( response => {
            let { user_id, username, profile_pic } = response.data;
            this.props.updateUser(user_id, username, profile_pic);
            console.log(response.data);
          })
          .catch( err => {
            console.log(err.message);
          })
        break;
      case 'register':
        Axios.post('/api/auth/register', { username, password })
          .then( response => {
            let { user_id, username, profile_pic } = response.data;
            this.props.updateUser(user_id, username, profile_pic);
          } )
          .catch( err => {
            console.log(err.message);
          } )
        break;
      default:
        break;
    }
  }

  render(){

    return (
      <div className="auth">
        <div className="portal">
          <div className="smiley logo"></div>
          <h1>Helo</h1>
          <div className="username">
            <span>Username:</span>
            <input type="text" onChange={ e => this.handleChange(e.target.value, 'username' )}/>
          </div>
          <div className="password">
            <span>Password:</span>
            <input type="password" onChange={ e => this.handleChange(e.target.value, 'password' )}/>
          </div>
          <div className="buttons">
            <Link to="/dashboard"><button onClick={() => this.handleClick('login')}>Login</button></Link>
            <Link to="/dashboard"><button onClick={() => this.handleClick('register')}>Register</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateUser })(Auth);