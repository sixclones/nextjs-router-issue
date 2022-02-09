const routes = require('./routes.js')

module.exports = {
	async rewrites() {
		return routes.map(route => ({
			source: route.slug,
			destination: route.route
		}))
	}
}
