const TodoController = function (TodoService) {
	
	const ctrl = this;
	
	ctrl.todoFilter = 'all';
	ctrl.filter = (todo) => {
		switch (ctrl.todoFilter) {
			case 'all': return true; break;
			case 'todo': return todo.done === false; break;
			case 'done': return todo.done === true; break;
		}
	};
	
	ctrl.addTodo = (todo) => {
		return TodoService.addTodo(todo)
		.then((res) => {
			ctrl.todos.unshift(res.data);
		});
	};
	
	ctrl.updateTodo = (todoid, changes) => {
		const idx = ctrl.todos.findIndex((todo) => todo.id === todoid);
		return TodoService.updateTodo(todoid, changes)
		.then((res) => {
			ctrl.todos[idx] = res.data;
		});
	};
	
	ctrl.removeTodo = (todoid) => {
		const idx = ctrl.todos.findIndex((todo) => todo.id === todoid);
		return TodoService.removeTodo(todoid)
		.then((res) => {
			ctrl.todos.splice(idx, 1);
		});
	};

};

export default TodoController;
