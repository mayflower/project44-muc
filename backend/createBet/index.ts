import {ProxyHandler} from 'aws-lambda'

const handler: ProxyHandler = async (event, context, callback) => {
    return {statusCode: 200, body: "{}"}
};


module.exports.handler = handler;
