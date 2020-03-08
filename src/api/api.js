/**
 * AWS Lambda with embedded Nodejs express server
 */

require('dotenv').config(); // run environment configuration

// Import dependancies
const
	express = require('express'),
	app = express(),
	debug = Boolean(process.env.DEBUG),
	excludeHeaderFromLog = ['x-apigateway-event', 'x-apigateway-context'],
	{ pgPool, queryIndex } = require('./db');


app.set('Accept', 'application/json'); // set global header

app.route('/api') // api entry point
	.post(handlePost) // create
	.get(handleGet) // retrieve
	.put(handlePut) // update
	.delete(handleDelete) // delete

// Create
function handlePost(req, res) {
	res.status(501).send(new Error('Not Implemented'));
}
// Retreive
function handleGet(req, res) {
	debug && logHeader(req.headers, excludeHeaderFromLog) // log headers if debug
	runQuery(queryIndex.testQuery(), (err, result) => err
		? res.status(500).send(err) // response if err
		: res.status(200).send(result) // response if ok
	)
}
// Update
function handlePut(req, res) {
	return res.status(501).send(new Error('Not Implemented'));
}
// Delete
function handleDelete(req, res) {
	return res.status(501).send(new Error('Not Implemented'));
}
// Runs a configured query and responds with a result
function runQuery(query, callback) {
	return pgPool.query(query)
		.then(result => callback(null, result))
		.catch(err => callback(err, null));
}
// log headers to the console
function logHeader(hdrs, excl) {
	return Object.entries(hdrs).forEach(header => !excl.includes(header[0]) && console.log(`${header[0]}: ${header[1]}`))
}
module.exports = app

// app.listen(process.env.PORT);
