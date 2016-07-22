const UserService = (AuthService, $http) => ({

    signin: (credentials) => {
        return AuthService.signin('/api/user/signin', credentials);
    }

});

export default UserService;
