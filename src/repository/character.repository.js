// @ts-check
const uuid = require('uuid')
const AWS = require('aws-sdk');
const constants = require('../util/constants');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class CharacterRepository {

  /**
   * Saves the character to the DynamoDb table 'Characters'
   * @param {*} character object with the character attributes
   */
  static async saveCharacter(character) {
    try {
      const params = {
        TableName: constants.CHARACTER_DATABASE_TABLE,
        Item: {
          characterId: uuid.v1(),
          ...character,
        },
        ConditionExpression: 'attribute_not_exists(characterId)', // insertar solo si no existe
      };
      await dynamoDb.put(params).promise();
    } catch (error) {
      console.log('Error at CharacterRepository.saveCharacter:::', error)
      throw error
    }
  }
}

module.exports = CharacterRepository