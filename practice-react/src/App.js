import React from 'react';
import './App.css';
import Counter from './components/Counter'

export default class App extends React.Component {

  state = {
    count: 0
  }

  handleIncrementBtn = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleDecrementBtn = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
        {/* useful for communicating/synchronizing multiple components */}
        <Counter 
          count={this.state.count} 
          handleIncrementBtn={this.handleIncrementBtn}
          handleDecrementBtn={this.handleDecrementBtn}
        />    
        <Counter 
          count={this.state.count} 
          handleIncrementBtn={this.handleIncrementBtn}
          handleDecrementBtn={this.handleDecrementBtn}
        /> {/* here is synchronized (sharing data) */}
      </div>
    );
  }
}