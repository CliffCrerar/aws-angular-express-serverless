// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';

const {pgPool,queryIndex} = require('db');

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
console.log('APP MODE:',process.env['NODE_ENV'])
exports.serverlessOne = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': await pgPool.query('select now()')// JSON.stringify({ message: await pg.query('select now()') })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
