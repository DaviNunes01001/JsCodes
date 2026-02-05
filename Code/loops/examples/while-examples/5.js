/**
 * @file 5.js
 * @description Calcula a soma de 1 até N usando um loop while.
 */
let n = Number(prompt("Digite um número inteiro:"));
let soma = 0;
let i = 1;

while (i <= n) {
  soma = soma + i;
  i++;
}

console.log("A soma de 1 até " + n + " é: " + soma);
alert("A soma de 1 até " + n + " é: " + soma);
