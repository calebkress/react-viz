import React, { Component } from 'react';
import './App.css';
import Controller from './Controller.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> React + d3 </h1>
          <h3> Create colored circles </h3>
        </header>
        <Controller />
      </div>
    );
  }
}

export default App;
