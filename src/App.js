import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import Utils from './utils/helpers';

const ALL = 'All';
const ACTIVE = 'Active';
const COMPLETED = 'Completed';

class App extends Component {
    state = {
        todos: [],
        nowShowing: ALL,
        editing: null
    };

    onNewTodoInsert = title => {
        this.setState({
            todos: this.state.todos.concat({
                id: Utils.uuid(),
                title,
                completed: false
            })
        });
    };

    onHandleClick = () => {
        this.setState({ todos: Utils.items() });
    };

    toggleParentTodoStatus = updatedTodo => {
        this.setState({
            todos: this.state.todos.map(
                todo =>
                    todo.id !== updatedTodo.id
                        ? todo
                        : Object.assign({}, todo, { completed: !updatedTodo.completed })
            )
        });
    };

    toggleAllTodo = event => {
        this.setState({
            todos: this.state.todos.map(todo => Object.assign({}, todo, { completed: event.target.checked }))
        });
    };

    deleteParentTodo = deletedTodo => {
        this.setState({
            todos: this.state.todos.filter(todo => todo !== deletedTodo)
        });
    };

    editParentTodo = todo => {
        this.setState({ editing: todo.id });
    };

    cancelParentTodo = todo => {
        this.setState({ editing: null });
    };

    saveParentTodo = (todoToSave, text) => {
        // Update the current todo text
        this.setState({
            todos: this.state.todos.map(
                todo => (todo !== todoToSave ? todo : Object.assign({}, todo, { title: text }))
            ),
            editing: null
        });
    };

    clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.completed)
        });
    };

    handleClickAll = () => {
        this.setState({ nowShowing: ALL });
    };
    handleClickActive = () => {
        this.setState({ nowShowing: ACTIVE });
    };
    handleClickComplete = () => {
        this.setState({ nowShowing: COMPLETED });
    };

    render() {
        let { todos, nowShowing, editing } = this.state;
        let filter = null;
        let activeTodoCount = todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
        let completedCount = todos.length - activeTodoCount;

        let shownTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (nowShowing === ACTIVE) {
                if (!todos[i].completed) shownTodos = shownTodos.concat(todos[i]);
            }
 else if (nowShowing === COMPLETED) {
                if (todos[i].completed) shownTodos = shownTodos.concat(todos[i]);
            }
 else shownTodos = shownTodos.concat(todos[i]);
        }

        if (activeTodoCount || completedCount) {
            filter = (
                <TodoFilter
                    count={shownTodos.length}
                    completedCount={completedCount}
                    clearCompletedButton={this.clearCompleted}
                    clickedAll={this.handleClickAll}
                    clickedActive={this.handleClickActive}
                    clickedCompleted={this.handleClickComplete}
                    nowShowing={nowShowing}
                />
            );
        }

        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoForm newTodoInsert={this.onNewTodoInsert} />
                    <TodoList
                        todos={shownTodos}
                        toggleParentTodo={this.toggleParentTodoStatus.bind(this)}
                        deleteParentTodo={this.deleteParentTodo.bind(this)}
                        editParentTodo={this.editParentTodo.bind(this)}
                        saveParentTodo={this.saveParentTodo.bind(this)}
                        cancelParentTodo={this.cancelParentTodo.bind(this)}
                        toggleAllTodo={this.toggleAllTodo}
                        handleClick={this.onHandleClick}
                        editTodoId={editing}
                    />
                    {filter}
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
