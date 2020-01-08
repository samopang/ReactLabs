import React from 'react'

export default function Todo(props) {
  return (
    <div className="container">
      <div 
        onClick={props.toggleComplete}
        className={props.todo.isCompleted ? 'cross-off' : ''}
      >
        {props.todo.task}
      </div>
      <button onClick={props.onDelete}>X</button>
    </div>
  )
}