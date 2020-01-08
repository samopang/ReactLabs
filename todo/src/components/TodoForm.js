import React from 'react'
import shortid from 'shortid'

export default class TodoForm extends React.Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit({
      id: shortid.generate(), // generate a short unique id
      task: this.state.text,
      isCompleted: false
    })
    this.setState({ // empty input field
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="text"
          placeholder="new task.."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    )
  }
}
