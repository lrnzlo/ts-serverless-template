// Reads docs @ https://www.serverless.com/framework/docs/
// To deploy single function use yarn serverless deploy --stage NAME_OF_STAGE function -f NAME_OF_THE_FUNCTION

export async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello, World!')
  };
};