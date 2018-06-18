import React, { Component } from 'react';
import './reset.css';
import './App.css';
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
