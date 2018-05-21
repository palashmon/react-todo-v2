import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';

render(
  <Provider>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
