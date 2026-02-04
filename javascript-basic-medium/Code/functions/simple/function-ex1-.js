/**
 * @file function-1.js
 * @description Exemplos simples de funções demonstrando operações e verificações.
 */
function parOuimpar() {
  let num = 4;
  if (num % 2 == 0) {
    console.log("numero escolhido = 4")
    console.log("é par");
  } else {
    console.log("é impar");
  }
}
function maiorDeidade() {
  nome = "davi";
  console.log(`ola ${nome} qual a sua idade?`);
  idade = 17
  console.log("idade escolhida = 17")
  if (idade >= 18) {
    console.log("voce é maior de idade");
  } else {
    console.log("Voce é menor de idade");
  }
}
function numbersecret() {
  console.log("escolha um desses numeros");
  console.log("30,50,30,20,10");
  let certo = 50;
  let number = 30;
  console.log("numero escolhido = 30");
  if (number === certo) {
    console.log("acertou!!!");
  } else {
    console.log("errou!!!");
    console.log("numero certo = 50");
  }
}

function somaSimples() {
    console.log("vamos somar?")
    console.log("numero escolhido para a soma = 20 + 30")
    num1 = 20
    num2 = 30
    soma = num1 + num2
console.log(`resultado da soma é ${soma}`)
}

function olaBemvindo() {
    console.log("ola quem é voce?")
    console.log("resposta = Davi")
    pessoa = "Davi"
    console.log(`Ola ${pessoa}! Seja Bem Vindo!!`)
}
function todasFunction() {
    console.log("==========================")
    parOuimpar()
    console.log("==========================")
    maiorDeidade()
    console.log("==========================")
    numbersecret()
    console.log("==========================")
    somaSimples()
    console.log("==========================")
    olaBemvindo()
    console.log("==========================")
}




  function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return b !== 0 ? a / b : "Erro: divisão por zero";
}


console.log(somar(5, 3));        
console.log(subtrair(5, 3));     
console.log(multiplicar(5, 3)); 
console.log(dividir(5, 3));     



