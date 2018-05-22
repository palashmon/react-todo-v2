import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, toggleAllTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters, getVisibleTodos } from '../actions';

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ toggleTodo, toggleAllTodo }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
