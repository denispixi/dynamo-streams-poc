exports.testDynamoTrigger = async event => {
  console.log('event:::', JSON.stringify(event, null, 2));

  // retornar respuesta
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Character saved succesfully',
    }),
  };
};

