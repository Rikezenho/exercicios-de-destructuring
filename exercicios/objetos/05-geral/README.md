# Destructuring de Objetos - 05 - Um apanhado geral

[Voltar](../../README.md)

## Proposta
Agora é a hora de juntar todos os conceitos. Com dois objetos de produto, vamos extrair:
- A primeira foto de cada produto, renomeando para não dar conflitos
- Definir um valor padrão de `https://via.placeholder.com/1500` para a `fotoSecundaria`, caso ela não exista
- O atributo `produtoIndicado`, bem como os demais atributos de cada produto
- Renomear cada variável extraída para não dar conflito
O código proposto é grande, mas não se assuste: leia com calma e extraia cada variável passo a passo.

## Código inicial
```js
const primeiroProduto = {
  nome: 'Sabão em pó OMO',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg'
  },
  atributos: {
    produtoNovo: false,
    produtoIndicado: true,
    emPromocao: true,
    compre1Leve2: true
  }
};

const segundoProduto = {
  nome: 'Sabão líquido ARIEL',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
  },
  atributos: {
    produtoNovo: true,
    produtoIndicado: false,
    emPromocao: false,
    compre1Leve2: false
  }
};

// Sem destructuring:
const fotoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
const fotoSecundariaPrimeiroProdutoSemDestructuring = typeof primeiroProduto.fotos.fotoSecundaria !== 'undefined'
  ? primeiroProduto.fotos.fotoSecundaria
  : 'https://via.placeholder.com/1500';
const produtoIndicadoPrimeiroProdutoSemDestructuring = primeiroProduto.atributos.produtoIndicado;
const atributosAdicionaisPrimeiroProdutoSemDestructuring = Object.keys(primeiroProduto.atributos).reduce((acc, currKey) => {
    if (currKey === 'produtoIndicado') {
      return acc;
    }
    
    acc[currKey] = primeiroProduto.atributos[currKey];
    return acc;
  }, {});

const fotoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;
const fotoSecundariaSegundoProdutoSemDestructuring = typeof segundoProduto.fotos.fotoSecundaria !== 'undefined'
  ? segundoProduto.fotos.fotoSecundaria
  : 'https://via.placeholder.com/1500';
const produtoIndicadoSegundoProdutoSemDestructuring = segundoProduto.atributos.produtoIndicado;
const atributosAdicionaisSegundoProdutoSemDestructuring = Object.keys(segundoProduto.atributos).reduce((acc, currKey) => {
    if (currKey === 'produtoIndicado') {
      return acc;
    }
    
    acc[currKey] = segundoProduto.atributos[currKey];
    return acc;
  }, {});

// Inicie o destructuring na linha abaixo ->

// <- Finalize o destructuring na linha acima

console.log('primeiro produto:');
console.log(fotoPrimeiroProduto);
console.log(fotoSecundariaPrimeiroProduto);
console.log(produtoIndicadoPrimeiroProduto);
console.log(atributosAdicionaisPrimeiroProduto);

console.log('segundo produto:');
console.log(fotoSegundoProduto);
console.log(fotoSecundariaSegundoProduto);
console.log(produtoIndicadoSegundoProduto);
console.log(atributosAdicionaisSegundoProduto);
```

## Resultado esperado no console
```js
"primeiro produto:"
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg"
"https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg"
true
{
  produtoNovo: false,
  emPromocao: true,
  compre1Leve2: true
}

"segundo produto:"
"https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg"
"https://via.placeholder.com/1500"
false
{
  produtoNovo: true,
  emPromocao: false,
  compre1Leve2: false
}
```

## Solução

<details>
  <summary>Clique para expandir!</summary>

  ```js
  const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg'
    },
    atributos: {
      produtoNovo: false,
      produtoIndicado: true,
      emPromocao: true,
      compre1Leve2: true
    }
  };

  const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    },
    atributos: {
      produtoNovo: true,
      produtoIndicado: false,
      emPromocao: false,
      compre1Leve2: false
    }
  };

  // Sem destructuring:
  const fotoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
  const fotoSecundariaPrimeiroProdutoSemDestructuring = typeof primeiroProduto.fotos.fotoSecundaria !== 'undefined'
    ? primeiroProduto.fotos.fotoSecundaria
    : 'https://via.placeholder.com/1500';
  const produtoIndicadoPrimeiroProdutoSemDestructuring = primeiroProduto.atributos.produtoIndicado;
  const atributosAdicionaisPrimeiroProdutoSemDestructuring = Object.keys(primeiroProduto.atributos).reduce((acc, currKey) => {
      if (currKey === 'produtoIndicado') {
        return acc;
      }
      
      acc[currKey] = primeiroProduto.atributos[currKey];
      return acc;
    }, {});

  const fotoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;
  const fotoSecundariaSegundoProdutoSemDestructuring = typeof segundoProduto.fotos.fotoSecundaria !== 'undefined'
    ? segundoProduto.fotos.fotoSecundaria
    : 'https://via.placeholder.com/1500';
  const produtoIndicadoSegundoProdutoSemDestructuring = segundoProduto.atributos.produtoIndicado;
  const atributosAdicionaisSegundoProdutoSemDestructuring = Object.keys(segundoProduto.atributos).reduce((acc, currKey) => {
      if (currKey === 'produtoIndicado') {
        return acc;
      }
      
      acc[currKey] = segundoProduto.atributos[currKey];
      return acc;
    }, {});

  // Inicie o destructuring na linha abaixo ->
  const {
    fotos: {
      fotoPrincipal: fotoPrimeiroProduto,
      fotoSecundaria: fotoSecundariaPrimeiroProduto = 'https://via.placeholder.com/1500'
    },
    atributos: {
      produtoIndicado: produtoIndicadoPrimeiroProduto,
      ...atributosAdicionaisPrimeiroProduto
    }
  } = primeiroProduto;

  const {
    fotos: {
      fotoPrincipal: fotoSegundoProduto,
      fotoSecundaria: fotoSecundariaSegundoProduto = 'https://via.placeholder.com/1500'
    },
    atributos: {
      produtoIndicado: produtoIndicadoSegundoProduto,
      ...atributosAdicionaisSegundoProduto
    }
  } = segundoProduto;
  // <- Finalize o destructuring na linha acima

  console.log('primeiro produto:');
  console.log(fotoPrimeiroProduto);
  console.log(fotoSecundariaPrimeiroProduto);
  console.log(produtoIndicadoPrimeiroProduto);
  console.log(atributosAdicionaisPrimeiroProduto);

  console.log('segundo produto:');
  console.log(fotoSegundoProduto);
  console.log(fotoSecundariaSegundoProduto);
  console.log(produtoIndicadoSegundoProduto);
  console.log(atributosAdicionaisSegundoProduto);
  ```
</details>

---

[Exercício anterior](../04-com-rest-operator/README.md) | [Próximo exercício](../../objetos-e-arrays/01-arrays-com-objetos/README.md)