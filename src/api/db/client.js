/**
 * Database client
 */

require('dotenv'); // configure environemnt

const
    { Pool } = require('pg'),
	pgPool = new Pool();

// Pool events
pgPool.on('error', err => console.log('PG Pool Error:', err));
pgPool.on('connect', msg => console.log('PG Pool Connected'));

module.exports = pgPool;
