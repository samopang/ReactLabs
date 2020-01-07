import React, { Component } from 'react';
import './App.css';

/**
 * Root Component
 * with render() function
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <div className="header">here is header</div>
        <div className="body">here is body</div>
        <div className="footer">here is footer</div>
      </div>
    );
  }
}

export default App;
