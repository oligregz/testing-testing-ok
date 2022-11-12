/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` para o array [1, 2, 3, 4, 5] passado como parametro', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  it("Verifica se a função `numbers`retorna `false` para o array [1, 2, '3', 4, 5] passado como parametro", () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });
  it("Verifica se a função `numbers`retorna `false` para o array [1, 'a', 3] passado como parametro", () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });
  it("Verifica se a função `numbers`retorna `false` para o array [' '] passado como parametro", () => {
    expect(numbers([' '])).toBe(false);
  });
});
