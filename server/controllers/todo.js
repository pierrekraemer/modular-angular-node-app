'use strict';

const
db = require('../models');

module.exports = {

	create: (req, res, next) => {
		return req.user.createTodo({
			text: req.body.text
		})
		.then((todo) => res.json(todo))
		.catch((err) => next(err));
	},
	
	getByUser: (req, res, next) => {
		return req.user.getTodos({
			order: [ [ 'created_at', 'DESC' ] ]
		})
		.then((todos) => res.json(todos))
		.catch((err) => next(err));
	},
	
	updateById: (req, res, next) => {
		let t;
		db.Todo.findById(req.params.todoid)
		.then((todo) => {
			if (!todo) {
				const err = new Error('Requested Todo not found');
				err.status = 404;
				throw err;
			}
			t = todo;
			return todo.update(
				req.body,
				{ fields: [ 'text', 'done' ] }
			);
		})
		.then(() => res.json(t))
		.catch((err) => next(err));
	},

	deleteById: (req, res, next) => {
		db.Todo.findById(req.params.todoid)
		.then((todo) => {
			if (!todo) {
				const err = new Error('Requested Todo not found');
				err.status = 404;
				throw err;
			}
			return todo.destroy();
		})
		.then(() => res.status(200).end())
		.catch((err) => next(err));
	}

};
