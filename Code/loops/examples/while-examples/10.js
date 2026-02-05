/**
 * @file 10.js
 * @description Exibe números do inicial ao final usando while.
 */
let inicial = Number(prompt("digite um numero inicial"))
let final = Number(prompt("digite um numero final"))

while (inicial <= final) {
    console.log(inicial);
    alert(inicial);
    inicial++;
}