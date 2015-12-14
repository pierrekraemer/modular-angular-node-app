'use strict';

var angular = require('angular');

module.exports = function (module_name, ctrl_name) {
	
	angular.module(module_name)

	.controller(ctrl_name, function () {
		
		var vm = this;
		
		// exports
		
		angular.extend( vm, {
			
		});
	
	});
	
	return ctrl_name;
	
};
