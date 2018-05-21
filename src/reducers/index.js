import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/**
 * Create a combineReducers
 *
 * This helper function turns an object whose values are different
 * reducing functions into a single reducing function you can pass to createStore
 *
 * More Info: https://redux.js.org/api-reference/combinereducers
 */
export default combineReducers({
  todos,
  visibilityFilter
});
