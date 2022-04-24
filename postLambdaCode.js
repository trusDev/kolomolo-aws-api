const AWS = require("aws-sdk");
const uuid = require("uuid");
const ddb = new AWS.DynamoDB.DocumentClient( { region: "eu-west-2" } );


exports.handler = async (event, context, callback) => {
    let parsedBody = JSON.parse(event.body);
    const user_name = parsedBody.name;
    const user_age = parsedBody.age
    const user_id = uuid.v4();
    await createUser(user_name, user_age, user_id).then(() => {
        callback(null, {
            statusCode:201,
            body: JSON.stringify({
                    msg: "User created successfully!",
                    new_user_id: user_id
                })
        })
    });
};

function createUser(name, age, id) {
    const params = {
        TableName: "users",
        Item: {
            "user_id": id,
            "user_name": name,
            "user_age": age
        }
    }
    return ddb.put(params).promise();
}