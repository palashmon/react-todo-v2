import React from 'react';
import PropTypes from 'prop-types';

const TodoCountLabel = ({ count, activeTodoWord }) => (
  <strong className="todo-count">
    {count} {activeTodoWord} left
  </strong>
);

TodoCountLabel.propTypes = {
  count: PropTypes.number,
  activeTodoWord: PropTypes.string.isRequired
};

export default TodoCountLabel;
