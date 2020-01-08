import React from 'react'
import TodoForm from './TodoForm'

/**
 * Todo MVC
 * 1. add a new task
 * 2. display all tasks
 * 3. cross ofd task ?
 * 4. show number of active tasks
 * 5. filter all / active / complete
 * 6. delete an existing task
 * 7. delete all completed tasks
 *  7.1 only show if at least one is completed
 * 8. button to toggle all on/off
 */

export default class TodoList extends React.Component {

  state = {
    tasks: []
  }

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks] // copy origin array to avoid .push() mutate the array
    })
  }

  render() {
    return (
      <div>
        <TodoForm
          onSubmit={this.addTask} 
        />
        {/* list tasks */}
        {this.state.tasks.map(data => (
          <div key={data.id}>
            {data.task}
          </div>
        ))}
      </div>
    )
  }
}
