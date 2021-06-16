const CharacterRepository = require('../repository/character.repository')

class CharacterService {

  static async saveCharacter(event) {
    const character = JSON.parse(event.body)
    await CharacterRepository.saveCharacter(character)
  }
}

module.exports = CharacterService