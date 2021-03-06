import React from 'react';
import FilterLink from '../containers/FilterLink';
import TodoCount from '../containers/TodoCount';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <footer className="footer">
    <TodoCount />
    <ul className="filters">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </ul>
  </footer>
);

export default Footer;
