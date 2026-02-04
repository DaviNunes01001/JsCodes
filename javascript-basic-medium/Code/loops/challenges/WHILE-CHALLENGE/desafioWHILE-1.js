/**
 * @file desafioWHILE-1.js
 * @description Verifica se um número é primo usando um loop while.
 */
let num = parseInt(prompt("Escolha um número: "));
let i = 0;

while (num <= 1){
    alert("ERROR!! número menor ou igual 1")
    console.log("ERROR!! número menor ou igual 1")
    break 
}

let divisao = 0;
while (i <= num) {
  if (num % i === 0) {
    divisao++;
  }
  i++
}

if (divisao === 2) {
    alert(`${num} é primo`);
    console.log(`${num} é primo`);
} else {
    alert(`${num} não é primo`);
    console.log(`${num} não é primo`);
}