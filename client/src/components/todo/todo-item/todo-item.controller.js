const TodoItemController = function () {
	
	const ctrl = this;
	
	ctrl.done = () => {
		ctrl.onUpdate({
			todoid: ctrl.todo.id,
			changes: { done: true }
		});
	};
	
	ctrl.undone = () => {
		ctrl.onUpdate({
			todoid: ctrl.todo.id,
			changes: { done: false }
		});
	};

	ctrl.remove = () => {
		ctrl.onRemove({
			todoid: ctrl.todo.id
		});
	};
	
	ctrl.$onChanges = (changes) => {
		if (changes.todo) {
			ctrl.todo = Object.assign({}, ctrl.todo);
		}
	};

};

export default TodoItemController;
