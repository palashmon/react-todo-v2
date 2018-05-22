import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterText from './FooterText';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../index.css';

const TodoApp = () => (
  <div>
    <section className="todoapp">
      <Header />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </section>
    <FooterText />
  </div>
);

export default TodoApp;
