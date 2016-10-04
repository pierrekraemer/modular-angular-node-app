export const JWTInterceptor = ($window) => ({

    request: (config) => {
		if (config.url.startsWith('/')) {
			config.headers = config.headers || {};
			if ($window.sessionStorage.token) {
				config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
		}
        return config;
    }

});

export const AuthService = ($http, $window, $q, UserService) => {

	let user = null;

	return {

		signin: (credentials) => {
			return $http.post('/user/signin', credentials)
			.then((res) => {
				$window.sessionStorage['token'] = res.data.token;
				user = UserService.makeUser(res.data.user);
			});
		},
		
		signout: () => {
			delete $window.sessionStorage['token'];
			user = null;
			return $q.resolve();
		},
		
		isSignedIn: () => {
			if (user) {
				return $q.resolve(true);
			} else {
				return $q((resolve, reject) => {
					$http.get('/user/whoami')
					.then((res) => {
						user = UserService.makeUser(res.data);
						resolve(true);
					})
					.catch(() => {
						user = null;
						resolve(false);
					});
				});
			}
		},
		
		user: () => {
			if (user) {
				return $q.resolve(user);
			} else {
				return $q((resolve, reject) => {
					$http.get('/user/whoami')
					.then((res) => {
						user = UserService.makeUser(res.data);
						resolve(user);
					})
					.catch(() => {
						user = null;
						resolve(user);
					});
				});
			}
		}

	};

};
