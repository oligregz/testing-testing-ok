/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
  // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
  // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
  // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  it('4.1 - Teste se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('')).toBeUndefined();
    expect(circle()).toBeUndefined();
    expect(circle('1')).toBeUndefined();
    expect(circle('dez')).toBeUndefined();
  })
  it('4.2 - Verifica se ao receber um raio, a função `circle` retorna um objeto contendos os valores esperados e 3 propriedades', () => {
    expect(circle(2)).toEqual({ radius: 2, area: 12.56, circumference: 12.56 });
    expect(circle(5)).toEqual({ radius: 5, area: 78.5, circumference: 31.400000000000002 });
    expect(circle(0.7)).toEqual({ radius: 0.7, area: 1.5386, circumference: 4.396 });
    expect(circle(2.4)).toEqual({ radius: 2.4, area: 18.086399999999998, circumference: 15.072 });
  });

});
