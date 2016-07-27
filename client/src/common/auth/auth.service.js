export const JWTInterceptor = ($window) => ({

    request : (config) => {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
    }

});

export const AuthService = ($http, $window, $q, UserService) => {

	let user = null;

	return {

		signin: (credentials) => {
			// return $http.post('/api/user/login', credentials)
			// .then((res) => {
			// 	$window.sessionStorage['token'] = res.data.token;
			// 	user = UserService.makeUser(res.data.user);
			// });
            user = UserService.makeUser({
				name: credentials.name,
                roles: ['user', 'admin']
			});
			return $q.resolve();
		},

        whoAmI: () => {
            return $q.resolve(true);
        },

		isSignedIn: () => {
			return user !== null;
		},

        currentUser: () => user,

		signout: () => {
			delete $window.sessionStorage['token'];
			user = null;
		}

	};

};
