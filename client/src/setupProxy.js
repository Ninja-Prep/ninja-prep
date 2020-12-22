const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/auth', {
			target: `http://${process.env.PROXY_DOMAIN}:5000`,
		})
	)
}
