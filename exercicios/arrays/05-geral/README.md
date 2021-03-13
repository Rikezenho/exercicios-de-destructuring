# Destructuring de Arrays - 05 - Um apanhado geral

[Voltar](../../README.md)

## Proposta
Fazendo um apanhado geral do produto exibido nos últimos exercícios, agora ele possui um array de atributos adicionais (cheio de strings) um pouco bagunçado.

O primeiro valor é importante e você precisa extraí-lo, enquanto que o segundo atributo pode ser deixado de lado.

Os demais atributos precisam ser capturados e exibidos em um loop for.

## Código inicial
```js
const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: [
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  ],
  atributos: [
    'Produto Indicado',
    'Produto Novo',
    'Promoção ativa',
    'Tira-manchas',
    'Rende mais'
  ]
};

const atributos = produto.atributos;

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log('atributo principal:', atributoPrincipal);
console.log('demais atributos:');
for (let i = 0; i < demaisAtributos.length; i++) {
  console.log(demaisAtributos[i]);
}
```

## Resultado esperado no console
```js
"atributo principal:"  "Produto Indicado"

"demais atributos:"

"Promoção ativa"

"Tira-manchas"

"Rende mais"
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
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    ],
    atributos: [
      'Produto Indicado',
      'Produto Novo',
      'Promoção ativa',
      'Tira-manchas',
      'Rende mais'
    ]
  };

  const atributos = produto.atributos;

  // Inicie o destructuring na linha abaixo ->
  const [
    atributoPrincipal,
    ,
    ...demaisAtributos
  ] = atributos;
  // <- Finalize o destructuring na linha acima

  console.log('atributo principal:', atributoPrincipal);
  console.log('demais atributos:');
  for (let i = 0; i < demaisAtributos.length; i++) {
    console.log(demaisAtributos[i]);
  }
  ```
</details>

---

[Exercício anterior](../04-com-rest-operator/README.md) | [Próximo exercício](../../objetos/01-simples/README.md)