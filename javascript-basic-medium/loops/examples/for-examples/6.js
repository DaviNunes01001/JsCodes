/**
 * @file 6.js
 * @description Calcula x elevado a n (potenciação) usando um loop for.
 */
let x = parseInt(prompt("Digite o valor de x (base):"));
let n = parseInt(prompt("Digite o valor de n (expoente):"));

let resultado = 1;

let expoente = n;
if (n < 0) {
    expoente = -n;
}

for (let i = 0; i < expoente; i++) {
    resultado *= x;
}

if (n < 0) {
    resultado = 1 / resultado;
}

alert(x + " elevado a " + n + " é " + resultado);