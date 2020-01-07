import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'

class App extends Component {

  multiplication(a,b) {
    return a * b;
  }

  render() {
    const sum = (a, b) => a + b;
    return (
      <div className="App">
        <Header 
          title="Hello from App" 
          num={5} 
          myArr={[1, 2, 3]}
          myObj={{
            a: 1, 
            b: 2
          }}
          myFunc1={sum} 
          myFunc2={(a, b) => a - b}
          myFunc3={this.multiplication}
        />
        <Body text="data from App" />
      </div>
    );
  }
}

export default App;
