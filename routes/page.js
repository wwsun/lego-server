'use strict';

const render = require('../config/render');

module.exports = function (app, route) {

  app.use(route.get('/', function *() {

    this.body = yield render('index.html', {user: 'weiwei sun'});
  }));

};