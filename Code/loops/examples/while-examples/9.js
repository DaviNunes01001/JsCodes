/**
 * @file 9.js
 * @description Calcula o fatorial de um número inteiro informado usando while.
 */
let n = parseInt(prompt("Digite um número inteiro:"));
let v = 1;

while (n > 0) {
  v *= n;   // multiplica v pelo número atual
  n--;      // diminui o número até chegar a 0
}

console.log("O fatorial é: " + v);
alert("O fatorial é: " + v);
