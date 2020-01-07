import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Body, { Body2 } from './components/Body'
import Counter from './components/Counter'

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
        <Body2 />
        <Counter initialCount={5} />
        <Counter initialCount={100} />
      </div>
    );
  }
}

export default App;
