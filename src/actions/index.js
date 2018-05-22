/**
 *
 * Action Creators
 *
 * More Info: https://redux.js.org/basics/actions
 *
 */
let nextTodoId = 0;

/**
 * Action used for adding a new todo
 */
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

/**
 * Action used for setting a new filter for todo list
 */
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

/**
 * Action used while toggling the status of a todo
 */
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const toggleAllTodo = checked => {
  return {
    type: 'TOGGLE_ALL_TODO',
    checked
  };
};

/**
 * Constants used for setting todo list filters
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};
