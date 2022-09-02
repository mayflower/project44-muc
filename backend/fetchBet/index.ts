import {APIGatewayProxyHandler} from 'aws-lambda'
import {Bet} from "./interfaces";
import {DocumentClient} from "aws-sdk/clients/dynamodb";

const db = new DocumentClient(
    {
        endpoint: "http://localstack:4566",
    }
);

const handler: APIGatewayProxyHandler = async (event, context, callback) => {
   // Parse Body - if body doesn't exist (for some reason), return 400
   if(!event.body) {
    return {statusCode: 400, body: JSON.stringify({error: "no body"})}
}
const betId = JSON.parse(event.body) as string

// Lookup ID in DB
const params = {
 TableName : "Bets", 
 Key: {
    HashKey: "betId"
 }
}



try{
    await db.get(params).promise()
}catch (e) {
    return {statusCode: 500, body: JSON.stringify({error: "Database Error", message: JSON.stringify(e)})}
}

return {statusCode: 200, body: JSON.stringify({success: true, data: betData})}

}

module.exports.handler = handler;