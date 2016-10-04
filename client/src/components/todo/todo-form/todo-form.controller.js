const TodoFormController = function () {
	
	const ctrl = this;

	ctrl.newTodo = {
		text: ''
	};

	ctrl.addTodo = () => {
		ctrl.onAddTodo({
			data: ctrl.newTodo
		})
		.then(() => { ctrl.newTodo.text = ''; });
	};

};

export default TodoFormController;
