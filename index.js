/**
 * ============== Destructuring Assignment com Arrays
 */
{
  // Simples
  const [pi, respostaParaTudo] = [3.14, 42];
  console.log(pi); // 3.14
  console.log(respostaParaTudo); // 42
}
{
  // Ignorando um dos valores
  const [ola, , mundo] = ["Olá", "ignore este valor", "Mundo"];
  console.log(ola, mundo); // Olá  Mundo
}

{
  // Ignorando um dos valores no começo
  const [, ola, mundo] = ["ignore este valor", "Olá", "Mundo"];
  console.log(ola, mundo); // Olá  Mundo
}

{
  // Ignorando um dos valores no final
  const [ola, mundo] = ["Olá", "Mundo", "ignore este valor"];
  console.log(ola, mundo); // Olá  Mundo
}

{
  // Atribuindo um valor padrão
  const [ola, mundo = "Mundo"] = ["Olá"];
  console.log(ola, mundo); // Olá  Mundo
}

{
  // Extraindo outros tipos de valores
  const [ola, getMundo] = [
    "Olá",
    function () {
      return "Mundo";
    },
  ];
  console.log(ola, getMundo()); // Olá  Mundo
}

{
  // Utilizando o operador de "rest operator" para extrair todos os demais valores
  const [itemPrioritario, ...itens] = ["Leite", "Pão", "Ovos", "Queijo"];
  console.log("Comprar", itemPrioritario, ", e depois:", itens); // Comprar  Leite  , e depois: ['Pão', 'Ovos', 'Queijo'];
}

/**
 * ============== Destructuring Assignment com Objetos
 */

{
  // Simples
  const { nome, email } = {
    nome: "Fulano da Silva",
    idade: 37,
    dataDeNascimento: "1993-06-20",
    criadoEm: "2020-12-06 00:32:00",
    email: "fulano.silva@gmail.com",
  };
  console.log(nome, email); // Fulano da Silva  fulano.silva@gmail.com
}

{
  // 1 nível de profundidade
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
  console.log(propriedades); // Uncaught ReferenceError: propriedades is not defined
}
  
{
  // Atribuindo um valor padrão
  const { idade = 30 } = {
    nome: "Fulano da Silva",
    email: "fulano.silva@gmail.com",
  };
  console.log(idade); // 30
}

{
  // Fazendo o assign, mas mudando o nome da variável
  const { idade: tempoAteHoje } = {
    nome: "Fulano da Silva",
    idade: 30,
  };
  console.log(tempoAteHoje); // 30
  console.log(idade); // Uncaught ReferenceError: idade is not defined
}

{
  // Fazendo o assign, mudando o nome da variável E atribuindo um valor padrão
  const { idade: tempoAteHoje = 30 } = {
    nome: "Fulano da Silva",
    email: "fulano.silva@gmail.com",
  };
  console.log(tempoAteHoje); // 30
  console.log(idade); // Uncaught ReferenceError: idade is not defined
}

{
  // Rest operator
  const { nome, ...outrasPropriedades } = {
    nome: "Fulano da Silva",
    idade: 37,
    dataDeNascimento: "1993-06-20",
    criadoEm: "2020-12-06 00:32:00",
    email: "fulano.silva@gmail.com",
  };
  console.log(nome, outrasPropriedades); // Fulano da Silva  { idade: 37, dataDeNascimento: "1993-06-20", criadoEm: "2020-12-06 00:32:00", email: "fulano.silva@gmail.com" }
}

{
  // Extraindo funções de um módulo JavaScript
  import React, { useState, useEffect } from "react";
  const [counter, useCounter] = useState(0); // o mesmo que React.useState

  const { join } = require("path");
  join(__dirname, "pasta"); // o mesmo que path.join
}

/**
 * ============== Destructuring Assignment de Arrays com Objetos, ou Objetos com Arrays
 */

{
  // Array com objetos
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
}

{
  // Objeto com arrays
  const {
    nome,
    notas: [, segundaNota],
  } = {
    nome: "Joãozinho",
    notas: [10, 9, 9.5, 8.7],
  };
  console.log(nome, "tirou", segundaNota, "na segunda prova!"); // Joãozinho  tirou  9  na segunda prova!
}

/**
 * ============== Possíveis erros
 */

{
  // cannot read property 'X' of undefined
  const {
    enderecos: { enderecoSecundario },
  } = {
    nome: "Destinatário da Silva",
    cidade: "São Paulo",
    enderecos: {
      enderecoPrincipal: {
        id: "487874873",
        endereco: "Rua das Laranjeiras, 27",
        cep: "04040-050",
      },
    },
  };

  if (enderecoSecundario) {
    return false;
  }

  const { cep: cepSecundario } = enderecoSecundario;
  console.log(cepSecundario);
}
