import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

/**
 * Todo MVC
 * 1. add a new task
 * 2. display all tasks
 * 3. cross off task
 * 4. show number of active tasks
 * 5. filter all / active / complete
 * 6. delete an existing task
 * 7. delete all completed tasks
 *  7.1 only show if at least one is completed
 * 8. button to toggle all on/off
 */

export default class TodoList extends React.Component {

  state = {
    tasks: [],
    show: 'all'
  }

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks] // copy origin array to avoid .push() mutate the array
    })
  }

  handleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        // suppose to update
        if (task.id === id) {
          return {
            ...task, // keep rest data only override changes
            isCompleted: !task.isCompleted
          }
        }
        return task
      })
    })
  }
  handleFilter = (e) => {
    this.setState({
      show: e.target.textContent
    })
  }
  handleDelete = (id) => { // permanently remove
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  render() {
    let tasks = []

    if (this.state.show === 'all') {
      tasks = this.state.tasks
    }
    if (this.state.show === 'active') {
      tasks = this.state.tasks.filter(task => !task.isCompleted)
    }
    if (this.state.show === 'completed') {
      tasks = this.state.tasks.filter(task => task.isCompleted)
    }

    return (
      <div>
        <TodoForm
          onSubmit={this.addTask} 
        />

        {/* observe the number of uncompleted tasks */}
        <div>
          Todo left: 
          {this.state.tasks.filter(task => !task.isCompleted).length}
        </div>

        {/* filter list */}
        <div>
          <button onClick={this.handleFilter}>all</button>
          <button onClick={this.handleFilter}>active</button>
          <button onClick={this.handleFilter}>completed</button>
        </div>

        {/* list tasks */}
        {tasks.map(task => ( // list tasks based on filter condition (default: ALL)
          <Todo 
            key={task.id} 
            todo={task}
            toggleComplete={() => this.handleComplete(task.id)}
            onDelete={() => this.handleDelete(task.id)}
          />
        ))}
        
        {/* {JSON.stringify(this.state.tasks)} */}
      </div>
    )
  }
}
