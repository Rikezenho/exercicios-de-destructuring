# Destructuring de Objetos - 01 - Simples

[Voltar](../../README.md)

## Proposta
Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do produto e um objeto com as fotos, separadas em `fotoPrimaria`, `fotoSecundaria` e `fotoAdicional`. Na listagem, você precisa exibir o nome do produto e a `fotoPrincipal`. Os demais dados não são necessários.

## Código inicial
```js
const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
    fotoAdicional: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
  }
};

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(nome);
console.log(fotoPrincipal);
```

## Resultado esperado no console
```js
"Sabão em pó"

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
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      fotoAdicional: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    }
  };

  // Inicie o destructuring aqui ->
  const {
    nome,
    fotos: {
      fotoPrincipal
    }
  } = produto;
  // <- Finalize o destructuring aqui

  console.log(nome);
  console.log(fotoPrincipal);
  ```
</details>

---

[Exercício anterior](../../arrays/05-geral/README.md) | [Próximo exercício](../02-com-valor-padrao/README.md)