# modular-angular-node-app
A starting kit for a modular Web application using [AngularJS](https://angularjs.org/) + [webpack](http://webpack.github.io/) on client side and [Node.js](https://nodejs.org/) + [Express](http://expressjs.com/) + [electrolyte](https://github.com/jaredhanson/electrolyte) on server side

Structure
---------

### Client side

The client code is organized using components and es6 modules following [Todd Motto's style guide](https://github.com/toddmotto/angular-styleguide).

```
client/
  |-src/
  |  |-app.js                    --> main module of the application (loads components & common module and vendor libs)
  |  |-app.component.js          --> root component of the application
  |  |-app.css                   --> css associated with the root component
  |  |-index.html                --> main html structure
  |  |-components/
  |  |  |-index.js               --> components module (loads all components modules)
  |  |  |-home/
  |  |  |  |-index.js            --> home module
  |  |  |  |-home.component.js   --> home component
  |  |  |  |-home.controller.js  --> home controller
  |  |  |  |-...                 --> could also provide services, css, sub-modules, ...
  |  |-common/
  |  |  |-index.js               --> common module (loads all common modules)
  |  |  |-nav/
  |  |  |  |-index.js            --> nav module
  |  |  |  |-...
  |-package.json                 --> description of dependencies
  |-gulpfile.js                  --> description of build tasks
```

### Server side

The server code is organized as follows:

```
server/
  |-config/                    --> config
  |  |-db.js
  |  |-...
  |-controllers/               --> controllers
  |  |-user.js
  |  |-...
  |-models/                    --> models
  |  |-index.js
  |  |-user.js
  |  |-...
  |-routes/                    --> routes
  |  |-index.js
  |  |-user.js
  |  |-...
  |-services/                  --> services
  |  |-...
  |-package.json
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
  |  |-app.js               --> js file built by webpack
  |-index.html              --> main template
```

### Server side

```sh
cd server
npm install
node server.js
```
