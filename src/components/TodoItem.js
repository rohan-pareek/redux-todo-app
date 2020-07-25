import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item">
            <div className="todo-title"
                style={{ textDecoration: props.todo.isCompleted === true ? 'line-through' : '' }}>
                {props.todo.title}
            </div>
            <div className = "todo-action">
            <button onClick={() => props.deleteTodo(props.todo.id)}>
                <i className="fa fa-trash"></i>
            </button>
            <button onClick={() => props.completeTodo(props.todo.id)}>
                <i className="fa fa-check"></i>
            </button>
            </div>
        </div>
    )
}

