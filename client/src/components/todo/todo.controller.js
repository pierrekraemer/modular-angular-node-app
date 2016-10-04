const TodoController = function (TodoService) {
	
	const ctrl = this;
	
	ctrl.addTodo = (todo) => {
		return TodoService.addTodo(todo)
		.then((res) => {
			ctrl.todos.unshift(res.data);
		});
	};
	
	ctrl.updateTodo = (index, data) => {
		return TodoService.updateTodo(ctrl.todos[index].id, data)
		.then((res) => {
			ctrl.todos[index] = res.data;
		});
	};
	
	ctrl.removeTodo = (index) => {
		return TodoService.removeTodo(ctrl.todos[index].id)
		.then((res) => {
			ctrl.todos.splice(index, 1);	
		});
	};

};

export default TodoController;
