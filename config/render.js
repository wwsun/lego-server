const views = require('co-views');

const render = views(__dirname + '/../views', {
  map: {html: 'swig'}
});

module.exports = render;