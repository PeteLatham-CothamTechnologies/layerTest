const uuid = require('uuid');
const { text } = require('/opt/nodejs/BitOfText');

exports.handler = async (message) => {
  let ourCode = uuid.v4();
  let string = `${text} --- ${ourCode}`;

  return {
    statusCode: 200,
    body: JSON.stringify(string),
  };
};
