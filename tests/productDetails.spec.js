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

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails()).toBeDefined();
    expect(productDetails('Suco', 'Colher')).toBeInstanceOf(Array);
    expect(productDetails('Suco', 'Colher').length).toBe(2);
    expect(productDetails('Suco', 'Colher')[0]).toBeInstanceOf(Object);
    expect(productDetails('Suco', 'Colher')[1]).toBeInstanceOf(Object);
    expect(productDetails('Suco', 'Colher')[0]).not.toEqual(productDetails('Suco', 'Colher')[1]);
    expect(productDetails('Suco', 'Colher')[0].details.productId).toContain(123);
    expect(productDetails('Suco', 'Colher')[1].details.productId).toContain(123);
  });
});
