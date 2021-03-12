# Exercícios de Destructuring Assignment

O destructuring é sem dúvidas uma das minhas features favoritas do JavaScript. Ele chegou oficialmente no ECMAScript 2015, vulgo ES6. Aqui, faço uma breve explicação do recurso (se quiser uma COMPLETA, [podes recorrer ao sempre completo artigo oficial no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)), que serve para "extrair" valores de objetos ou arrays (sendo eles explícitos, ou sendo retorno de alguma função).

## Casos de uso
No front-end, é extremamente comum fazermos requisições GET para APIs que retornam a resposta em JSON. Sendo assim, o destructuring vira uma arma muito forte contra a repetição de códigos, bem como a favor da legibilidade e contra a verbosidade do seu código.

Existem dois tipos de destructuring: de arrays e objetos.

## Destructuring Assignment com Arrays
Com arrays, a ordem dos valores é muito importante. Originalmente, sabemos que, ao manipular um array, nós utilizamos referências "index-based" (que começam em 0); falando em legibilidade de código, é muito ruim quando você vê um código e vê algo como "valor1", "funcao1", não é mesmo?

Então, graças ao destructuring assignment, você pode "extrair" valores de um array atribuindo o nome que você quiser (e assim ajudar na legibilidade).

```js
const [pi, respostaParaTudo] = [3.14, 42];
console.log(pi); // 3.14
console.log(respostaParaTudo); // 42
```

Já que estamos extraindo os valores do array baseado na ordem em que eles estão, podemos muito bem "ignorar" alguns valores que você não deseja nomear - estejam eles no meio, no começo ou no fim:

```js
// Ignorando um dos valores
const [ola, , mundo] = ["Olá", "ignore este valor", "Mundo"];
console.log(ola, mundo); // Olá  Mundo
```

```js
// Ignorando um dos valores no começo
const [, ola, mundo] = ["ignore este valor", "Olá", "Mundo"];
console.log(ola, mundo); // Olá  Mundo
```

```js
// Ignorando um dos valores no final
const [ola, mundo] = ["Olá", "Mundo", "ignore este valor"];
console.log(ola, mundo); // Olá  Mundo
```

Também podemos atribuir um valor padrão usando um simples operador de atribuição - vai que o valor que você quer tem a possibilidade de não existir, não é mesmo?

```js
const [ola, mundo = "Mundo"] = ["Olá"];
console.log(ola, mundo); // Olá  Mundo
```

Vale lembrar que, no caso acima, o valor padrão vai ter prioridade APENAS quando o valor que você tentou extrair for `undefined`. Outros valores *falsy*, como `null`, `0`, `false`, têm prioridade sobre o valor padrão.

E, sempre bom lembrar que você pode extrair QUALQUER tipo de valor: string, numbers, functions, etc.

```js
const [ola, getMundo] = [
  "Olá",
  function () {
    return "Mundo";
  },
];
console.log(ola, getMundo()); // Olá  Mundo
```
(percebeu a semelhança com o Hook de `useState` do React?) :)

Aumentando a complexidade, dá para juntarmos o destructuring com o `rest operator`, e aí você pode fazer algo como: extraia o primeiro valor, e os DEMAIS valores, quero em forma de Array:

```js
const [itemPrioritario, ...itens] = ['Leite', 'Pão', 'Ovos', 'Queijo'];
console.log('Comprar', itemPrioritario, ', e depois:', itens); // Comprar  Leite  , e depois: ['Pão', 'Ovos', 'Queijo'];
```

## Destructuring Assignment com Objetos
Já com objetos, a ordem não importa, mas os nomes das CHAVES são fundamentais! O caso de uso mais comum é extrair apenas os valores que você vai utilizar, de um JSON gigante.

```js
const { nome, email } = {
  nome: "Fulano da Silva",
  idade: 37,
  dataDeNascimento: "1993-06-20",
  criadoEm: "2020-12-06 00:32:00",
  email: "fulano.silva@gmail.com",
};
console.log(nome, email); // Fulano da Silva  fulano.silva@gmail.com
```

Você pode extrair valores não apenas do primeiro nível, como também de quaisquer outros níveis (mas fique atento que, a variável para "entrar" no segundo nível não é declarada):

```js
const {
  nome,
  propriedades: { precisaMudarASenha },
} = {
  nome: "Fulano da Silva",
  propriedades: {
    precisaMudarASenha: true,
    ultimoLogin: "2020-12-06 00:32:00",
  },
};
console.log(
  nome,
  precisaMudarASenha
    ? "precisa trocar a senha."
    : "está com a senha atualizada."
); // Fulano da Silva  precisa trocar a senha.
console.log(propriedades); // undefined
```

Assim como no de arrays, você também pode atribuir valores padrão:
```js
const { idade = 30 } = {
  nome: "Fulano da Silva",
  email: "fulano.silva@gmail.com",
};
console.log(idade); // 30
```

E também pode renomear uma variável! Ou seja, você extrai com o nome original dela, mas declara uma variável com outro nome:
```js
const { idade: tempoAteHoje } = {
  nome: "Fulano da Silva",
  idade: 30,
};
console.log(tempoAteHoje); // 30
console.log(idade); // undefined
```

Juntando os dois últimos conceitos (valor padrão e renaming), temos algo assim:
```js
const { idade: tempoAteHoje = 30 } = {
  nome: "Fulano da Silva",
  email: "fulano.silva@gmail.com",
};
console.log(tempoAteHoje); // 30
console.log(idade); // undefined
```

E por último, um caso bem comum de uso é quando você quer extrair apenas algumas propriedades ou funções de um módulo JavaScript:
```js
import React, { useState } from 'react';
const [counter, useCounter] = useState(0); // o mesmo que React.useState

const { join } = require('path');
join(__dirname, 'pasta'); // o mesmo que path.join
```

## Destructuring Assignment de Arrays com Objetos, ou Objetos com Arrays

Agora que você já está craque no destructuring tanto de arrays quanto objetos, dá pra combinar os dois.

Um exemplo de destructuring de Arrays com Objetos:

```js
const [{ nome: nomeDoPrimeiroAluno }, { nome: nomeDoSegundoAluno }] = [
  {
    nome: "Pedro da Silva",
    idade: 17,
  },
  {
    nome: "Mariazinha Almeida",
    idade: 19,
  },
];
console.log(nomeDoPrimeiroAluno); // Pedro da Silva
console.log(nomeDoSegundoAluno); // Mariazinha Almeida
```

E um exemplo de destructuring de Objetos com Arrays:

```js
const {
  nome,
  notas: [, segundaNota],
} = {
  nome: "Joãozinho",
  notas: [10, 9, 9.5, 8.7],
};
console.log(nome, 'tirou', segundaNota, 'na segunda prova!'); // Joãozinho  tirou  9  na segunda prova!
```

## Possíveis erros
Um erro muito comum no JavaScript é o famigerado:
```
Uncaught TypeError: Cannot read property 'nome' of undefined
```
Esse erro acontece quando tentamos acessar uma propriedade de algo que não existe. No destructuring, isso infelizmente não muda: se você tentar acessar algo do segundo nível de um objeto, mas a primeira chave não existe, o erro será o mesmo!

Então algo que você pode fazer para evitar este problema de maneira elegante (e legível), é "extrair" os níveis por partes, e adicionar verificações se o valor existe antes de ir "se aprofundando" em um objeto.

Um exemplo do que estou dizendo:

```js
const {
    enderecos: {
        enderecoSecundario
    }
} = {
    nome: 'Destinatário da Silva',
    cidade: 'São Paulo',
    enderecos: {
        enderecoPrincipal: {
            id: '487874873',
            endereco: 'Rua das Laranjeiras, 27',
            cep: '04040-050'
        }
    }
};

if (!enderecoSecundario) {
    return false;
}

const { cep: cepSecundario } = enderecoSecundario;
console.log(cepSecundario);
```

E, com isso, acredito que você está apto a fazer todo tipo de destructuring!

Sugestões, comentários ou observações, favor [abrir uma issue](https://github.com/Rikezenho/exercicios-de-destructuring/issues/new).