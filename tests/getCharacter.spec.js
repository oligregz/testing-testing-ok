/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Quando a função não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(getCharacter()).toBeUndefined();
  });
  it("A função deve retornar os objetos corretos para os parâmetros 'Arya', 'Brienne' e 'Melissandre'", () => {
    expect(getCharacter('Arya')).toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
    expect(getCharacter('Brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    });
    expect(getCharacter('Melissandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'
    ]
    });
  });
  it('Teste se os parâmetros não são Case Sensitive', () => {
    expect(getCharacter('arya stark')).not.toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
    expect(getCharacter('brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    });
    expect(getCharacter('melissandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'
    ]
    });;
  });
  it('Teste se ao passar um nome que não está na tabela, a função retorna undefined', () => {
    expect(getCharacter('Judas Priest')).toBeUndefined();
  });
});
