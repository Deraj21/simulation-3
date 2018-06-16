import React, { Component } from 'react';
import './App.css';
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
import Form from './component/Form';
import Nav from './component/Nav';
import Post from './component/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
        <Form />
        <Nav />
        <Post />
      </div>
    );
  }
}

export default App;
