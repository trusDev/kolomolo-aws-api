'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: "eu-west-2"});

exports.handler = async function(event, context) {

    console.log(event.pathParameters);
    // const myDB = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    const myDB = new AWS.DynamoDB.DocumentClient();


    const idRequested = event.pathParameters.userid;

    const params = {
        ExpressionAttributeValues: {
            ":v1": idRequested
        },
        KeyConditionExpression: "user_id=:v1",
        // ProjectionExpression: "user_name user_age",
        TableName: "users"
    }
    
    
    let res = await myDB.query(params, (err,data) => {
        console.log("!!!!! ");
        if(err) console.log(err);
        console.log(data);

    }).promise();
    
    if(res.Items.length == 1) {
        const response = {
            "statusCode": 200,
            "body": JSON.stringify({user: res.Items[0]})
        };
        return response;
    }
    else {
        const response = {
            "statusCode": 404,
            "body": JSON.stringify({ msg: `User with the id of ${idRequested} does not exist`})
        };
        return response;
    }
   

}