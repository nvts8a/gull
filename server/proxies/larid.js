var proxyPath = '/larid';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    proxy.web(req, res, { target: 'http://localhost:3000/v1' });
  });
};
