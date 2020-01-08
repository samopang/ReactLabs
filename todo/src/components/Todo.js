import React from 'react'

export default function Todo(props) {
  return (
    <div 
      onClick={props.toggleComplete}
      className={props.todo.isCompleted ? 'cross-off' : ''}
    >
      {props.todo.task}
    </div>
  )
}

