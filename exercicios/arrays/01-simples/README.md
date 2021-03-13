# Destructuring de Arrays - 01 - Simples

[Voltar](../../README.md)

## Proposta
Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do produto e um array de fotos. Na listagem, você precisa exibir somente a primeira foto do produto, então basta pegar o primeiro valor; os demais não são necessários.

## Código inicial
```js
const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: [
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
  ]
};

const fotos = produto.fotos;

// Sem destructuring:
const primeiraFotoSemDestructuring = fotos[0];

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(primeiraFoto);
```

## Resultado esperado no console
```js
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg"
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
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    ]
  };

  const fotos = produto.fotos;

  // Sem destructuring:
  const primeiraFotoSemDestructuring = fotos[0];

  // Inicie o destructuring aqui ->
  const [primeiraFoto] = fotos;
  // <- Finalize o destructuring aqui

  console.log(primeiraFoto);
  ```
</details>

---

[Próximo exercício](../02-ignorando-elementos/README.md)