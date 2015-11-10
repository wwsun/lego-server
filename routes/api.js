const userCtrl = require('../app/controllers/user');

module.exports = function (app, route) {

  app.use(route.get('/api/users', userCtrl.list));

};