import angular from 'angular';

import { JWTInterceptor, AuthService } from './auth.service.js';

const auth = angular
.module('auth', [])
.factory('JWTInterceptor', JWTInterceptor)
.factory('AuthService', AuthService)
.name;

export default auth;
