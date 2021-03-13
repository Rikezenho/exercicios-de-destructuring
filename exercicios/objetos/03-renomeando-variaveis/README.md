# Destructuring de Objetos - 03 - Renomeando as variáveis extraídas

[Voltar](../../README.md)

## Proposta
Em uma página de comparação de produtos no e-commerce, você precisa extrair a foto principal de cada produto. Mas putz, se você fizer isso do jeito clássico, vai dar erro, pois serão duas variáveis com o mesmo nome! Sendo assim, o objetivo é extrair os valores, porém já renomeando as variáveis para poder usar.

## Código inicial
```js
const primeiroProduto = {
  nome: 'Sabão em pó OMO',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  }
};

const segundoProduto = {
  nome: 'Sabão líquido ARIEL',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
  }
};

// Sem destructuring:
const fotoDoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
const fotoDoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log(fotoDoPrimeiroProduto);
console.log(fotoDoSegundoProduto);
```

## Resultado esperado no console
```js
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg"

"https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg"
```

## Solução

<details>
  <summary>Clique para expandir!</summary>

  ```js
  const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
  };

  const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    }
  };

  // Sem destructuring:
  const fotoDoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
  const fotoDoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;

  // Inicie o destructuring na linha abaixo ->
  const { fotos: { fotoPrincipal: fotoDoPrimeiroProduto } } = primeiroProduto;
  const { fotos: { fotoPrincipal: fotoDoSegundoProduto } } = segundoProduto;
  // <- Finalize o destructuring na linha acima

  console.log(fotoDoPrimeiroProduto);
  console.log(fotoDoSegundoProduto);
  ```
</details>

---

[Exercício anterior](../02-com-valor-padrao/README.md) | [Próximo exercício](../04-com-rest-operator/README.md)