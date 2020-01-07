import React, { Component } from 'react';
import './App.css';

/**
 * new Header Component
 * with render() function
 */
class Header extends Component {
  render() {
    return (
        <div className="header">here is header</div>
    );
  }
}

/**
 * Root Component
 * with render() function
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World

        {/* pass another component to RootComponent */}
        <Header />
        
        <div className="body">here is body</div>
        <div className="footer">here is footer</div>
      </div>
    );
  }
}

export default App;
