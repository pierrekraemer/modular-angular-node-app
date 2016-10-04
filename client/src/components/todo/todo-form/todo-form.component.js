import controller from './todo-form.controller';
import template from './todo-form.template.html';

const TodoFormComponent = {
	controller,
	bindings: {
		onAddTodo: '&'
	},
    template
};

export default TodoFormComponent;
