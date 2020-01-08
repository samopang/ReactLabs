import React from 'react'

export default class Counter extends React.Component {

  // in React component life cycle:
  // render() -> mount() -> unmount() -> render() -> mount() ..
  componentWillUnmount() {
    console.log('unmounting..')
  }
  componentDidMount() {
    console.log('mounting..')
  }

  constructor(props) {
    // using 'constructor' 
    // need to add 'super' using 'props'
    super(props)

    // using 'state'
    // only in ClassComponent, FunctionalComponent hasn't
    // can be defined outside 'constructor'
    // in 'constructor' for using initial 'props' values
    this.state = {
      count: 0
      // count: props.initialCount
    }
  }


  // with this syntax can be easy to binding event/state
  handleIncrementBtn = () => {
    // console.log('button clicked') // test
    // console.log(this)
    // console.log(this.state)

    // bad practice (mutating way)
    // this.state.count += 1
    // best practice (pass as a new state)
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
    // after called function while re-render
    console.log('render function called')

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
