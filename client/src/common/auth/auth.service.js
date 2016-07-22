export const JWTInterceptor = ($window) => ({

    request : (config) => {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
    }

});

export const AuthService = ($http, $window, $q) => {
	
	let data = {
		user: null
	};
	
	return {

		signin: (apiUrl, credentials) => {
			// return $http.post(apiUrl, credentials)
			// .then((res) => {
			// 	$window.sessionStorage['token'] = res.data.token;
			// 	data.user = res.data.user;
			// });
			data.user = {
				name: credentials.name
			};
			return $q.resolve();
		},
		
		isSignedIn: () => {
			return data.user !== null;
		},
		
		currentUser: () => data.user,
		
		getData: () => data,

		signout: () => {
			delete $window.sessionStorage['token'];
			data.user = null;
		}

	};
	
};
