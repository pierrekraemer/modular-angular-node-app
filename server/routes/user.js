'use strict';

exports = module.exports = function (userCtrl, utils) {

	return {
		prefix: '/user',
		routes: [
			{
				path: '/signin',
				usage: [
					{
						verb: 'post',
						func: userCtrl.signin
					}
				]
			},
			{
				path: '/whoami',
				usage: [
					{
						verb: 'get',
						func: [ utils.identifyUser, userCtrl.getByToken ]
					}
				]
			}
		]
	};

};

exports['@require'] = [
	'controllers/user',
	'services/utils'
];

exports['@singleton'] = true;
