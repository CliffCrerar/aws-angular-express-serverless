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
		},
		{
			context: [
				"/CliffCrerar/fc4212be9495fab14ff6b491afc48bd5/raw/cdac10664b533a5a7576f7cd8e7c36c89608484a/propdata.json"
			],

			target: 'https://gist.githubusercontent.com',
			secure: !debug,
			changeOrigin: true
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
