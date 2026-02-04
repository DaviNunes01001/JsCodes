/**
 * @file 4.js
 * @description Exibe a tabuada de um número informado (1 a 10) usando while.
 */
let n = Number(prompt("Digite um número inteiro:"));

let i = 1;
while (i <= 10) {
    let resultado = n * i;
    console.log(`${n} x ${i} = ${resultado}`);
    alert(`${n} x ${i} = ${resultado}`);
    i++; 
}