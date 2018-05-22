import { connect } from 'react-redux';
import TodoCountLabel from '../components/TodoCountLabel';
import { VisibilityFilters, getVisibleTodos } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter);
  const pluralize = (count, word) => (count === 1 ? word : word + 's');
  const count = visibleTodos ? visibleTodos.length : 0;
  return {
    count,
    activeTodoWord: pluralize(count, 'item')
  };
};
export default connect(mapStateToProps, null)(TodoCountLabel);
