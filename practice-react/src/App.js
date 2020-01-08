import React, { Component } from 'react';
import './App.css';
import FetchRandomUser from './components/FetchRandomUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchRandomUser />       
      </div>
    );
  }
}

export default App;
