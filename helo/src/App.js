import React, { Component } from 'react';
import Axios from 'axios';
import './reset.css';
import './App.css';
import './component/Auth/Auth.css';
import './component/Dashboard/Dashboard';
import './component/Form/Form.css';
import './component/Nav/Nav.css';
import './component/Post/Post.css';
import routes from './routes';

// "https://robohash.org/JaredTanner?set=set4"

class App extends Component {

  render() {

    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

export default App;
