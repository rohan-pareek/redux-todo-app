import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions/todo'

class TodoForm extends Component {

    state = {
        todo: ''
    }

    handleChange = (e) => [
        this.setState({
            [e.target.name]: e.target.value
        })
    ]

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({
                todo: ''
            })    
        }
    }

    render() {
        return (
            <form className = "todo-form" onSubmit = {this.handleSubmit}>
                <input type = "text" name = "todo" placeholder = "Enter your planned task"
                value = {this.state.todo} onChange = {this.handleChange} />
                <button type = "submit">Add Todo</button>
            </form>
        )
    }
}

export default connect(null, {addTodo})(TodoForm);
