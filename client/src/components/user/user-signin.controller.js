const UserSigninController = function (UserService, AuthService, $state) {

    const data = {
        credentials: {
    		name: '',
            password: ''
        },
        message: ''
	};

    const signin = () => {
        AuthService.signin(data.credentials)
        .then(function () {
			$state.go('root.home');
        })
        .catch(function (err) {
            data.message = err.message;
            data.credentials.password = '';
        });
    };

	Object.assign(this, {
		data,
        signin
	});

};

export default UserSigninController;
