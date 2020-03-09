/**
 * Application proxy
 */
require('dotenv').config();

const
	api = process.env['NODE_ENV'] === 'development' ? 'API-LOCAL' : 'API-REMOTE',
	PROXY_CONFIG = [
		{
			context: [
				"/api"
			],
			target: process.env[api],
			secure: !process.env['NODE_ENV'] === 'development'
		}
	];

module.exports = PROXY_CONFIG;
