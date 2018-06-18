import React from 'react';
import { Route } from 'react-router-dom';
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
import Post from './component/Post';
import Form from './component/Form';
import Nav from './component/Nav';

export default (
  <div>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Auth}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/post/:postid" component={Post}/>
    <Route path="/new" component={Form}/>
  </div>
)
