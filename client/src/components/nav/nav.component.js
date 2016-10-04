import controller from './nav.controller';
import template from './nav.template.html';

const NavComponent = {
	bindings: {
		user: '<',
		onSignout: '&'
	},
    controller,
    template
};

export default NavComponent;
