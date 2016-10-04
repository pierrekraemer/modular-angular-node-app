import angular from 'angular';

import TodoItemComponent from './todo-item.component';

const todoItem = angular
.module('todoItem', [])
.component('todoItem', TodoItemComponent)
.name;

export default todoItem;
