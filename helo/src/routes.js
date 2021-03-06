import React from 'react';
import { Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Post from './component/Post/Post';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';

export default (
  <div className="routes-container">
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Auth}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/post/:postid" component={Post}/>
    <Route path="/new" component={Form}/>
  </div>
)
