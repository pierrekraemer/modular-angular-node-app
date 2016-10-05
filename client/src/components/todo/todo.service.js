const TodoService = ($http) => ({
	
	getTodos: () => $http.get('/api/todo'),

	addTodo: (todo) => $http.post('/api/todo', todo),
	
	updateTodo: (todoid, changes) => $http.put('/api/todo/' + todoid, changes),
	
	removeTodo: (todoid) => $http.delete('/api/todo/' + todoid)

});

export default TodoService;
