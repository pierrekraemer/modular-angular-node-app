'use strict';

exports = module.exports = function (userCtrl) {
	
	return {
		prefix: '/user',
		routes: [
			{
				path: '/',
				usage: [
					{
						verb: 'get',
						func: [ userCtrl.getAll ]
					},
					{
						verb: 'post',
						func: [ userCtrl.create ]
					}
				]
			},
			{
				path: '/:userid',
				usage: [
					{
						verb: 'get',
						func: [ userCtrl.getById ]
					},
					{
						verb: 'put',
						func: [ userCtrl.updateById ]
					}
				]
			}
		]
	};
	
};

exports['@require'] = [
	'controllers/user'
];

exports['@singleton'] = true;
