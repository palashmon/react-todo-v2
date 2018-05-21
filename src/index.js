import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
