import angular from 'angular';

import TodoFormComponent from './todo-form.component';

const todoForm = angular
.module('todoForm', [])
.component('todoForm', TodoFormComponent)
.name;

export default todoForm;
