/**
 * Application proxy
 */
const dotenv = require('dotenv').config();
const
	debug = process.env['NODE_ENV'] === 'development',
	api = debug ? 'API-LOCAL' : 'API-REMOTE',
	PROXY_CONFIG = [
		{
			context: [
				"/api"
			],
			target: process.env[api],
			secure: !debug,
			changeOrigin: true,
			pathRewrite: {
				"^/api": "/api"
			}
		}
	].map(conf => {
		if(debug){
			console.log('conf: ', conf);
			console.log('api:', api);
			console.log('dotenv:', dotenv);
		}
		return conf
	})

module.exports = PROXY_CONFIG;
