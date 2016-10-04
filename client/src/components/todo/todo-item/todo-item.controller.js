const TodoItemController = function () {
	
	const ctrl = this;
	
	ctrl.done = () => {
		ctrl.onUpdate({
			data: { done: true }
		});
	};
	
	ctrl.undone = () => {
		ctrl.onUpdate({
			data: { done: false }
		});
	};

	ctrl.remove = () => { ctrl.onRemove(); };
	
	ctrl.$onChanges = (changes) => {
		if (changes.todo) {
			ctrl.todo = Object.assign({}, ctrl.todo);
		}
	};

};

export default TodoItemController;
