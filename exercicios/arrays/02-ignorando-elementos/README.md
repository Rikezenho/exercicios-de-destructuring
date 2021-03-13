# Destructuring de Arrays - 02 - Ignorando alguns elementos

[Voltar](../../README.md)

## Proposta
Agora, no mesmo sistema de e-commerce, por alguma regra de negócio muito doida, vai ser necessário exibir a segunda e a quinta foto do produto, em um bloco promocional na home da loja. Os demais valores não são necessários.

## Código inicial
```js
const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: [
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/6fc0c00f6fda35efb901adacce47713b.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/b0b032dcc2099828489f9bac38be3390.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/2aa699618d4ecd3c1abe28392b736caa.jpg'
  ]
};

const fotos = produto.fotos;

// Sem destructuring:
const segundaFotoSemDestructuring = fotos[1];
const quintaFotoSemDestructuring = fotos[4];

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(segundaFoto);
console.log(quintaFoto);
```

## Resultado esperado no console
```js
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg"

"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/b0b032dcc2099828489f9bac38be3390.jpg"
```

## Solução

<details>
  <summary>Clique para expandir!</summary>

  ```js
  const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/6fc0c00f6fda35efb901adacce47713b.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/b0b032dcc2099828489f9bac38be3390.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/2aa699618d4ecd3c1abe28392b736caa.jpg'
    ]
  };

  const fotos = produto.fotos;
  
  // Sem destructuring:
  const segundaFotoSemDestructuring = fotos[1];
  const quintaFotoSemDestructuring = fotos[4];

  // Inicie o destructuring na linha abaixo ->
  const [ , segundaFoto, , , quintaFoto] = fotos;
  // <- Finalize o destructuring na linha acima

  console.log(segundaFoto);
  console.log(quintaFoto);
  ```
</details>

---

[Exercício anterior](../01-simples/README.md) | [Próximo exercício](../03-com-valor-padrao/README.md)