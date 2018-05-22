import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="header">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          ref={node => (input = node)}
        />
        <button type="submit" style={{ display: 'none' }}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
