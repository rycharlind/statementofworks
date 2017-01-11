var ENV = process.env.npm_lifecycle_event;
var isProd = ENV.indexOf('build') > -1; 

if (!isProd) {
  module.exports = require('./config/webpack.dev.js');
}
else {
  module.exports = require('./config/webpack.prod.js');
}