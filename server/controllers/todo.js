'use strict';

exports = module.exports = (todoModel) => (
	{
		create: (req, res, next) => {
			return todoModel.create({
				text: req.body.text,
				UserId: req.user.id
			})
			.then((todo) => res.json(todo))
			.catch((err) => next(err));
		},
		
		getByUser: (req, res, next) => {
			return req.user.getTodos({
				order: [ [ 'createdAt', 'DESC' ] ]
			})
			.then((todos) => res.json(todos))
			.catch((err) => next(err));
		},
		
		updateById: (req, res, next) => {
			let t;
			todoModel.findById(req.params.todoid)
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
			todoModel.findById(req.params.todoid)
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
	}
);

exports['@require'] = [
	'models/todo'
];

exports['@singleton'] = true;
