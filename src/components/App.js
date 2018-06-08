import React, { Component } from 'react';

import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Example app to showcase authorization in React with React Router 4</h1>           
        </header>
       <Routes/>
      </div>
    );
  }
}

export default App;
