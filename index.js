const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const serve = require('koa-static');
const route = require('koa-route');
const logger = require('koa-logger');
const config = require('./config/config');

/**
 * Initialize application
 */
const app = module.exports = new Koa();
app.use(logger());

// Static file serving: css/images
app.use(serve(__dirname + '/public'));
console.log(__dirname);

/**
 * Bootstrap routes/api
 *  Scan all directory /routes and add to app
 */
const routesPath = path.join(__dirname, 'routes');
fs.readdirSync(routesPath).forEach(function (file) {
  if (file[0] === '.') {
    return;
  }
  require(routesPath + '/' + file)(app, route);
});


/**
 * Start server
 */
if (!module.parent) {
  const port = 3000;
  app.listen(port);
  console.log('Running %s site at: http://localhost:%d', config.mode, port);
}