const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/


describe('6 - Verifica se a função `productDetails` tem o comportamento esperado', () => {
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    expect(productDetails('Martelo', 'Prego')).toHaveLength(2);
    expect(productDetails('Hardware', 'Software')).toHaveLength(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(
      [
        {name: "Alcool gel", details: {productId: 'Alcool gel123'}},
        {name: "Máscara", details: {productId: 'Máscara123'}}
      ]
    );
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    expect(productDetails("genericOne", "genericTwo")[0].details.productId).toBe("genericOne123");
    expect(productDetails("genericOne", "genericTwo")[1].details.productId).toBe("genericTwo123");
  });
});
