import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick} className={completed ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={() => {}} />
      <label>{text}</label>
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
