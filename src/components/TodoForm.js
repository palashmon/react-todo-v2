import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY = 13;
class TodoForm extends Component {
    state = {
        newTodo: ''
    };
    static propTypes = {
        newTodoInsert: PropTypes.func
    };

    handleChange = event => {
        this.setState({ newTodo: event.target.value });
    };

    handleNewTodoKeyDown = event => {
        if (event.keyCode !== ENTER_KEY) return;
        event.preventDefault();

        let val = this.state.newTodo.trim();
        if (val) {
            this.props.newTodoInsert(val);
            this.setState({ newTodo: '' });
        }
    };

    render() {
        return (
            <div className="header">
                <input
                    className="new-todo"
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.newTodo}
                    onChange={this.handleChange}
                    onKeyDown={this.handleNewTodoKeyDown}
                />
            </div>
        );
    }
}

export default TodoForm;
