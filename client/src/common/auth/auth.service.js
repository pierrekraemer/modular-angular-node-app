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

	let signedIn = false;
	let user = null;

	return {

		signin: (credentials) => {
			// return $http.post('/api/user/login', credentials)
			// .then((res) => {
			// 	$window.sessionStorage['token'] = res.data.token;
			// 	return UserService.makeUser(res.data.user);
			// });
			
			$window.sessionStorage['token'] = 'blabla';
			signedIn = true;
			
			user = UserService.makeUser({
				name: credentials.name,
				roles: ['user', 'admin']
			});
			return $q.resolve();
			
			// return $q.resolve(
			// 	UserService.makeUser({
			// 		name: credentials.name,
            //     	roles: ['user', 'admin']
			// 	})
			// );
		},
		
		signout: () => {
			delete $window.sessionStorage['token'];
			signedIn = false;
			user = null;
			return $q.resolve();
		},
		
		isSignedIn: () => signedIn,
		
		user: () => user

	};

};
