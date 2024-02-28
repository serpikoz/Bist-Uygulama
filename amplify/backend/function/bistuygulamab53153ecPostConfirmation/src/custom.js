const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB");
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();
  const options = { timeZone: "Europe/Istanbul", timeZoneName: "short" };
  const turkishDate = date.toLocaleString("tr-TR", options);

  const params = {
    Item: {
      id: { S: event.request.userAttributes.sub },
      __typename: { S: "User" },
      email: { S: event.request.userAttributes.email },
      name: { S: event.request.userAttributes.name },
      createdAt: { S: turkishDate },
      updatedAt: { S: turkishDate },
      networth: { D: "1000.0" },
    },
    TableName: process.env.USERTABLE,
  };

  //Give the user 1000 TL Guru

  try {
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }

  context.done(null, event);
};
