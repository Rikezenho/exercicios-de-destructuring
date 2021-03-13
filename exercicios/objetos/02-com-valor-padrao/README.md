# Destructuring de Objetos - 02 - Utilizando valores padrão

[Voltar](../../README.md)

## Proposta
Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do produto e um objeto com as fotos. Apesar desse nó de `fotos` sempre existir, somente a `fotoPrincipal` virá sempre preenchida, já a `fotoSecundaria` e `fotoVerso` podem não estarem disponíveis. Caso alguma destas duas não exista, deve-se exibir o valor padrão de `https://via.placeholder.com/1500` no lugar. O objetivo é extrair 3 fotos para o produto.

## Código inicial
```js
const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  }
};

// Sem destructuring:
const fotoPrincipalSemDestructuring = produto.fotos.fotoPrincipal;
const fotoSecundariaSemDestructuring = typeof produto.fotos.fotoSecundaria !== 'undefined' ? produto.fotos.fotoSecundaria : 'https://via.placeholder.com/1500';
const fotoVersoSemDestructuring = typeof produto.fotos.fotoVerso !== 'undefined' ? produto.fotos.fotoVerso : 'https://via.placeholder.com/1500';

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(fotoPrincipal);
console.log(fotoSecundaria);
console.log(fotoVerso);
```

## Resultado esperado no console
```js
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg"

"https://via.placeholder.com/1500"

"https://via.placeholder.com/1500"
```

## Solução

<details>
  <summary>Clique para expandir!</summary>

  ```js
  const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
  };

  // Sem destructuring:
  const fotoPrincipalSemDestructuring = produto.fotos.fotoPrincipal;
  const fotoSecundariaSemDestructuring = typeof produto.fotos.fotoSecundaria !== 'undefined' ? produto.fotos.fotoSecundaria : 'https://via.placeholder.com/1500';
  const fotoVersoSemDestructuring = typeof produto.fotos.fotoVerso !== 'undefined' ? produto.fotos.fotoVerso : 'https://via.placeholder.com/1500';

  // Inicie o destructuring na linha abaixo ->
  const {
    fotos: {
      fotoPrincipal,
      fotoSecundaria = 'https://via.placeholder.com/1500',
      fotoVerso = 'https://via.placeholder.com/1500'
    }
  } = produto;
  // <- Finalize o destructuring na linha acima

  console.log(fotoPrincipal);
  console.log(fotoSecundaria);
  console.log(fotoVerso);
  ```
</details>

---

[Exercício anterior](../01-simples/README.md) | [Próximo exercício](../03-renomeando-variaveis/README.md)