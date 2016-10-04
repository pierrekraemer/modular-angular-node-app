import controller from './todo.controller';
import template from './todo.template.html';

const TodoComponent = {
	bindings: {
		todos: '<'
	},
	controller,
    template
};

export default TodoComponent;
