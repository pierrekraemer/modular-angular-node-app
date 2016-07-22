const UserSigninController = function (UserService) {

    const data = {
        credentials: {
    		name: '',
            password: ''
        },
        message: ''
	};

    const signin = () => {
        UserService.signin(data.credentials)
        .then(function () {
            data.message = 'Success';
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
