"use strict";

// tslint:disable-next-line: one-variable-per-declaration
const
 	awsServerlessExpress = require("aws-serverless-express"),
	app = require("./src/api"),
	server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
