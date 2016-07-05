'use strict';

exports = module.exports = function (todoCtrl) {

	return {
		prefix: '/todo',
		routes: [
			{
				path: '/',
				usage: [
					{
						verb: 'get',
						func: [ todoCtrl.getAll ]
					},
					{
						verb: 'post',
						func: [ todoCtrl.create ]
					}
				]
			},
			{
				path: '/:todoid',
				usage: [
					{
						verb: 'get',
						func: [ todoCtrl.getById ]
					},
					{
						verb: 'put',
						func: [ todoCtrl.updateById ]
					},
					{
						verb: 'delete',
						func: [ todoCtrl.deleteById ]
					}
				]
			}
		]
	};

};

exports['@require'] = [
	'controllers/todo'
];

exports['@singleton'] = true;
