export const JWTInterceptor = ($window) => ({

    request : (config) => {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
    }

});

export const AuthService = ($http, $window) => ({

    signin: (apiUrl, credentials) => {
        return $http.post(apiUrl, credentials)
        .then((res) => {
            $window.sessionStorage.token = res.data.token;
        });
    },

    signout: () => {
        delete $window.sessionStorage.token;
    }

});
