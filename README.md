# modular-angular-node-app
A starting kit for a modular Web application using [AngularJS](https://angularjs.org/) + [browserify](http://browserify.org/) on client side and [Node.js](https://nodejs.org/) + [electrolyte](https://github.com/jaredhanson/electrolyte) on server side

Structure
---------

### Client side

The client code is organized as follows:

```
client/
  |-src/                       --> application src
  |  |-app.js                  --> top-level angular module definition
  |  |-index.html              --> main template
  |  |-modules/
  |  |  |-index.js             --> exports the list of modules
  |  |  |-home/                --> each module gets its own directory
  |  |  |  |-index.js          --> module definition
  |  |  |  |-home.html         --> partial views
  |  |  |  |-fr.json           --> translation files
  |  |  |  |-en.json
  |  |-gulpfile.js
  |  |-package.json
```

The main "app.js" file defines the main Angular module of the application.
An array of the names of external dependencies (listed in the "package.json" file) is created using the browserify require method:
```js
var deps = [
	require('angular-ui-router'),
	require('angular-translate'),
	require('angular-translate-loader-partial')
];
```
An array of the name of application modules is created in the same way (the "index.js" file in "src/modules/" is responsible for requiring the different modules and putting their exported names in the exported array):
```js
var modules = require('./modules');
```
All these dependencies are injected in the main Angular module:
```js
angular.module('App', deps.concat(modules))
```

Deployment
----------

### Client side

```sh
cd client
npm install
gulp
```

The default gulp task creates a "client/public/" directory which will be served statically by the server.
This directory is organized as follows:
```
public/
  |-js/
  |  |-app.js               --> js file built by browserify
  |-index.html              --> main template
  |-partials/               --> partial views
  |  |-home/                --> each module gets its own directory
  |  |  |-home.html
  |-i18n/                   --> translation files
  |  |-home/                --> each module gets its own directory
  |  |  |-fr.json
  |  |  |-en.json
```

Launching
```sh
gulp watch
```
will watch:
- js files and re-build the application in the public directory using [watchify](https://github.com/substack/watchify)
- partials and i18n files and re-copy them in the public directory

### Server side

```sh
cd server
npm install
node server.js
```
