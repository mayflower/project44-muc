import {APIGatewayProxyHandler} from 'aws-lambda'
import {DocumentClient} from "aws-sdk/clients/dynamodb";

const db = new DocumentClient(
    {
        endpoint: "http://localstack:4566",
    }
);

const handler: APIGatewayProxyHandler = async (event, context, callback) => {
    // Parse Body - if body doesn't exist (for some reason), return 400
    if (!event.pathParameters || !event.pathParameters.betId) {
        return {statusCode: 400, body: JSON.stringify({error: "no body"})}
    }
    // const betId = JSON.parse(event.body) as string
    const betId = event.pathParameters.betId

// Lookup ID in DB
    const params = {
        TableName: "Bets",
        Key: {
            PK: betId,
            SK: betId
        }
    }


    try {
        const data = await db.get(params).promise()
        return {statusCode: 200, body: JSON.stringify({success: true, data: data.Item})}
    } catch (e) {
        return {statusCode: 500, body: JSON.stringify({error: "Database Error", message: JSON.stringify(e)})}
    }
}

module.exports.handler = handler;