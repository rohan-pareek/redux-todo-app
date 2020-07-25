import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, fetchTodo, completeTodo } from '../actions/todo';
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';

class Todos extends Component {
    render() {
        return (
            <div className = "todo-container">
                <TodoForm />
                {this.props.todos.length === 0 && 
                    <p>No tasks pending enjoy !!!</p>
                }
                    {this.props.todos.map(todo => (
                        <TodoItem 
                        key = {todo.id}  
                        todo = {todo}
                        deleteTodo = {this.props.deleteTodo}
                        completeTodo = {this.props.completeTodo}
                        />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps
    , {
        addTodo,
        deleteTodo,
        fetchTodo,
        completeTodo
    })(Todos)
