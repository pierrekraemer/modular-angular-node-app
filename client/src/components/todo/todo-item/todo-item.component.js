import controller from './todo-item.controller';
import template from './todo-item.template.html';

const TodoItemComponent = {
	controller,
	bindings: {
		todo: '<',
		onUpdate: '&',
		onRemove: '&'
	},
    template
};

export default TodoItemComponent;
