const UserService = (AuthService, $http) => ({

    signin: (credentials) => {
        return AuthService.signin('/api/user/signin', credentials);
    },
	
	signout: () => {
		AuthService.signout();
	},
	
	currentUser: () => {
		return AuthService.currentUser();
	}

});

export default UserService;
