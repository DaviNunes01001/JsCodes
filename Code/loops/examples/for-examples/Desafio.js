/**
 * @file Desafio.js
 * @description Verifica se um número maior que 1 é primo (usando for) e exibe o resultado.
 */
let num = parseInt(prompt("Coloque um número maior que 1: "));

if (num <= 1) {
  alert("Número inválido!");
  console.log("Número inválido!");
}

let divisao = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisao++;
  }
}

if (divisao === 2) {
  alert(`${num} é primo`);
  console.log(`${num} é primo`);
} else {
  alert(`${num} não é primo`);
  console.log(`${num} não é primo`);
}
