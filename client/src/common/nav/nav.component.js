import controller from './nav.controller';

const NavComponent = {
    controller,
	bindings: {
		authData: '<'
	},
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" ng-click="$ctrl.data.isNavbarCollapsed = !$ctrl.data.isNavbarCollapsed">
                        <span class="sr-only"> Toggle navigation </span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" ui-sref="root.home"> App name </a>
                </div>
                <div class="collapse navbar-collapse" uib-collapse="$ctrl.data.isNavbarCollapsed">
                    <ul class="nav navbar-nav">
                        <li ui-sref-active="active"> <a ui-sref="root.about"> About </a> </li>
                        <li ui-sref-active="active"> <a ui-sref="root.weather"> Weather </a> </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown" uib-dropdown>
                            <a href="#" class="dropdown-toggle" uib-dropdown-toggle role="button">
								<span class="glyphicon glyphicon-user"></span>
								<span ng-show="$ctrl.authData.user"> {{ $ctrl.authData.user.name }} </span>
								<span class="caret"></span>
							</a>
                            <ul class="dropdown-menu" uib-dropdown-menu ng-hide="$ctrl.authData.user">
                                <li> <a ui-sref="root.userSignin"> Sign in </a> </li>
                            </ul>
                            <ul class="dropdown-menu" uib-dropdown-menu ng-show="$ctrl.authData.user">
                                <li> <a ui-sref="root.userSignout"> Sign out </a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
};

export default NavComponent;
