import angular from 'angular';

import todoForm from './todo-form';
import todoItem from './todo-item';

import buttons from 'angular-ui-bootstrap/src/buttons';

import TodoService from './todo.service';
import TodoComponent from './todo.component';

const todo = angular
.module('todo', [
	buttons,
	todoForm,
	todoItem
])
.factory('TodoService', TodoService)
.component('todo', TodoComponent)
.config(($stateProvider) => {
    $stateProvider
    .state('app.todo', {
        url: '/todo',
		data: {
			authRequired: true
		},
        component: 'todo',
		resolve: {
			todos: (TodoService) => TodoService.getTodos().then((res) => res.data)
		}
    });
})
.name;

export default todo;
