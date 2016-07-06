import controller from './nav.controller';

const NavComponent = {
    controller,
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" ng-click="$ctrl.data.isNavbarCollapsed = !$ctrl.data.isNavbarCollapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" ui-sref="home">App name</a>
                </div>
                <div class="collapse navbar-collapse" uib-collapse="$ctrl.data.isNavbarCollapsed">
                    <ul class="nav navbar-nav">
                        <li ui-sref-active="active"><a ui-sref="home">Home</a></li>
                        <li ui-sref-active="active"><a ui-sref="about">About</a></li>
                        <li ui-sref-active="active"><a ui-sref="contact">Contact</a></li>
                        <li class="dropdown" uib-dropdown>
                            <a href="#" class="dropdown-toggle" uib-dropdown-toggle role="button">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu" uib-dropdown-menu>
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
};

export default NavComponent;
