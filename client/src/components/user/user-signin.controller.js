const UserSigninController = function ($state, AuthService) {
	
	const ctrl = this;

    ctrl.data = {
        credentials: {
    		username: '',
            password: ''
        },
        message: ''
	};

    ctrl.signin = () => {
        AuthService.signin(ctrl.data.credentials)
		.then(function () {
			$state.go('app.home', {}, { reload: true });
		})
        .catch(function (err) {
            ctrl.data.message = err.data;
            ctrl.data.credentials.password = '';
        });
    };

};

export default UserSigninController;
