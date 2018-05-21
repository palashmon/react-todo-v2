import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array,
        toggleParentTodo: PropTypes.func,
        deleteParentTodo: PropTypes.func,
        toggleAllTodo: PropTypes.func,
        handleClick: PropTypes.func,
        editParentTodo: PropTypes.func,
        saveParentTodo: PropTypes.func,
        cancelParentTodo: PropTypes.func,
        editTodoId: PropTypes.string
    };
    state = {
        childTodos: this.props.todos
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ childTodos: nextProps.todos });
    }

    toggle(todoToToggle) {
        //debugger;
        let todoCopy = JSON.parse(JSON.stringify(this.state.childTodos));
        let found = todoCopy.find(v => v.id === todoToToggle.id);
        if (found) {
            found.completed = !todoToToggle.completed;
            this.setState({ childTodos: todoCopy });
        }
    }

    renderTodoItem(todo) {
        const { editTodoId } = this.props;
        return (
            <TodoItem
                todo={todo}
                key={todo.id}
                onToggle={this.props.toggleParentTodo.bind(this, todo)}
                onDeleteClick={this.props.deleteParentTodo.bind(this, todo)}
                onEdit={this.props.editParentTodo.bind(this, todo)}
                onSave={this.props.saveParentTodo.bind(this, todo)}
                onCancel={this.props.cancelParentTodo.bind(this, todo)}
                editing={editTodoId === todo.id}
            />
        );
    }

    render() {
        const { childTodos } = this.state;

        let todoItems = [];
        childTodos.map(todo => {
            let view = this.renderTodoItem(todo);
            if (!view) return;
            todoItems.push(view);
        }, this);

        let activeTodoCount = childTodos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
        let toggleAllButton;
        let testButton;

        if (childTodos.length > 0) {
            toggleAllButton = (
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={this.props.toggleAllTodo.bind(this)}
                    checked={activeTodoCount === 0}
                />
            );
        } else {
            testButton = (
                <button
                    style={{ padding: '10px 20px', cursor: 'pointer', fontSize: 12, color: '#bfbfbf' }}
                    onClick={this.props.handleClick}
                >
                    Add Items (For testing purpose only)
                </button>
            );
        }

        let fullList = (
            <section className="main">
                {toggleAllButton}
                <ul className="todo-list">{todoItems}</ul>
                {testButton}
            </section>
        );
        return fullList;
    }
}

export default TodoList;
