import React from 'react'

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>in Counter Component</h2>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.handleIncrementBtn}>increment</button>
        <button onClick={this.props.handleDecrementBtn}>decrement</button>
      </div>
    )
  }
}
