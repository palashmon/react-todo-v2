import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ ...args }) => {
  const { todos, toggleTodo, toggleAllTodo } = args;
  let toggleAllButton, input;
  let activeTodoCount = todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
  if (todos.length > 0) {
    toggleAllButton = (
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => toggleAllTodo(input.checked)}
        checked={activeTodoCount === 0}
        ref={node => (input = node)}
      />
    );
  }
  return (
    <section className="main">
      {toggleAllButton}
      <ul className="todo-list">
        {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)}
      </ul>
    </section>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
