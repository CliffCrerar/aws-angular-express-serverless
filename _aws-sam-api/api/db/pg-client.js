/**
 * PG Client
 */

// process.env.NODE_ENV
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

const test = require('dotenv').config({path: require('path').join(__dirname,'.env')});
const 
    {join} = require('path'),
    {Pool} = require('pg');
    console.log('VARS',test);

// console.log('test: ', test);

const pgPool = new Pool(require(join(__dirname,'pool-conf.json')));

console.log('pgPool: ', pgPool);

module.exports = pgPool;

