# React Todo App

> Version 2 using Redux

[![Dependency Status](https://david-dm.org/palashmon/react-todo-v2/status.svg)](https://david-dm.org/palashmon/react-todo-v2)
[![Dev-Dependency Status](https://david-dm.org/palashmon/react-todo-v2/dev-status.svg)](https://david-dm.org/palashmon/react-todo-v2)
[![Languages Count](https://img.shields.io/github/languages/count/palashmon/react-todo-v2.svg)](https://github.com/palashmon/react-todo-v2/search?l=javascript)
[![Top Language Used](https://img.shields.io/github/languages/top/palashmon/react-todo-v2.svg)](https://github.com/palashmon/react-todo-v2/search?l=javascript)
&nbsp;

This is a simple Todo app for learning React basics.

## Component Structure

* `TodoApp`
  * `AddTodo` - Used for inserting a new todo item
  * `TodoList`
    * `Todo` - All the items are saved as single `Todo` component
  * `TodoFilter`

## Features

* [x] Add a new `Todo` item
* [x] Show the new todo added in `TodoList`
* [x] Toggle _single_ `Todo` status as completed or not completed
* [x] Toggle _all_ `Todo` status as completed or not completed
* [x] Delete a `Todo`
* [x] View either All, Completed or active `Todo` items only
* [x] Remove all completed `Todo` from list
* [x] View how many `Todo` are left in the list
* [x] Fade display of a completed todo
* [x] Edit a todo
