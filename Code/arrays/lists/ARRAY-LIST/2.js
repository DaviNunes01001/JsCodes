/**
 * @file 2.js
 * @description Lê 10 números, soma-os e mostra o resultado.
 */
let n = [];
let som = 0;
let i = 0;

while (i < 10) {
  let num = Number(prompt('Digite um número:'));
  n[i] = num; 
  som = som + num;
  i++;
}

console.log(`Números digitados: ${n}`);
console.log(`A soma dos números é: ${som}`);
alert(`A soma deles é: ${som}`);
