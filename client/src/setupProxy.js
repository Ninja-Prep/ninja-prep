const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/auth', {
      target: `http://${process.env.PROXY_DOMAIN}:8080`,
    }),
    createProxyMiddleware('/api', {
      target: `http://${process.env.PROXY_DOMAIN}:8080`,
    }),
    createProxyMiddleware('/payment', {
      target: `http://${process.env.PROXY_DOMAIN}:8080`,
    }),
  );
};
