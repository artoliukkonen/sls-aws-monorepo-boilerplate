// TODO: GraphQL example

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
}
