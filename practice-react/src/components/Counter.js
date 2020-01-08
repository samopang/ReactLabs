import React from 'react'

export default class Counter extends React.Component {

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
      <div>
        <h2>in Counter Component</h2>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleIncrementBtn}>increment</button>
        <button onClick={this.handleDecrementBtn}>decrement</button>
      </div>
    )
  }
}
