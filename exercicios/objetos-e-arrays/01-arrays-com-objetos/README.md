# Destructuring de arrays com objetos

[Voltar](../../README.md)

## Proposta
Você recebe um array de objetos de produtos de uma API, porém, deseja extrair o nome e preço apenas dos dois primeiros itens do array. Como proceder neste caso?

## Código inicial
```js
const produtos = [
  {
    nome: 'Sabão em pó OMO',
    preco: 12.29
  },
  {
    nome: 'Sabão líquido ARIEL',
    preco: 14.50
  },
  {
    nome: 'Sabão ACE',
    preco: 13.27
  }
];

// Sem destructuring:
const nomePrimeiroProdutoSemDestructuring = produtos[0].nome;
const precoPrimeiroProdutoSemDestructuring = produtos[0].preco;
const nomeSegundoProdutoSemDestructuring = produtos[1].nome;
const precoSegundoProdutoSemDestructuring = produtos[1].preco;

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(nomePrimeiroProduto);
console.log(precoPrimeiroProduto);
console.log(nomeSegundoProduto);
console.log(precoSegundoProduto);
```

## Resultado esperado no console
```js
"Sabão em pó OMO"
12.29
"Sabão líquido ARIEL"
14.50
```

## Solução

<details>
  <summary>Clique para expandir!</summary>

  ```js
  const produtos = [
    {
      nome: 'Sabão em pó OMO',
      preco: 12.29
    },
    {
      nome: 'Sabão líquido ARIEL',
      preco: 14.50
    },
    {
      nome: 'Sabão ACE',
      preco: 13.27
    }
  ];

  // Sem destructuring:
  const nomePrimeiroProdutoSemDestructuring = produtos[0].nome;
  const precoPrimeiroProdutoSemDestructuring = produtos[0].preco;
  const nomeSegundoProdutoSemDestructuring = produtos[1].nome;
  const precoSegundoProdutoSemDestructuring = produtos[1].preco;

  // Inicie o destructuring na linha abaixo ->
  const [
    { nome: nomePrimeiroProduto, preco: precoPrimeiroProduto },
    { nome: nomeSegundoProduto, preco: precoSegundoProduto }
  ] = produtos;
  // <- Finalize o destructuring na linha acima

  console.log(nomePrimeiroProduto);
  console.log(precoPrimeiroProduto);
  console.log(nomeSegundoProduto);
  console.log(precoSegundoProduto);
  ```
</details>

---

[Exercício anterior](../../objetos/05-geral/README.md) | [Próximo exercício](../02-objetos-com-arrays/README.md)