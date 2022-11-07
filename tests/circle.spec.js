/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('4.1 - Teste se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('')).toBeUndefined();
    expect(circle()).toBeUndefined();
    expect(circle('1')).toBeUndefined();
    expect(circle('dez')).toBeUndefined();
  });
  it('4.2 - Verifica se ao receber um raio, a função `circle` retorna um objeto contendos os valores esperados e 3 propriedades', () => {
    expect(circle(2)).toEqual({ radius: 2, area: 12.56, circumference: 12.56 });
    expect(circle(5)).toEqual({ radius: 5, area: 78.5, circumference: 31.400000000000002 });
    expect(circle(0.7)).toEqual({ radius: 0.7, area: 1.5386, circumference: 4.396 });
    expect(circle(2.4)).toEqual({ radius: 2.4, area: 18.086399999999998, circumference: 15.072 });
  });
});
