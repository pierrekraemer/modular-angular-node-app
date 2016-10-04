'use strict';

exports = module.exports = function (todoCtrl, utils) {

	return {
		prefix: '/api/todo',
		routes: [
			{
				path: '/',
				usage: [
					{
						verb: 'post',
						func: [ utils.identifyUser, todoCtrl.create ]
					},
					{
						verb: 'get',
						func: [ utils.identifyUser, todoCtrl.getByUser ]
					}
				]
			},
			{
				path: '/:todoid',
				usage: [
					{
						verb: 'put',
						func: [ utils.identifyUser, todoCtrl.updateById ]
					},
					{
						verb: 'delete',
						func: [ utils.identifyUser, todoCtrl.deleteById ]
					}
				]
			}
		]
	};

};

exports['@require'] = [
	'controllers/todo',
	'services/utils'
];

exports['@singleton'] = true;
