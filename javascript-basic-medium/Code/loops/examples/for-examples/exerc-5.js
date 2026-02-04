/**
 * @file exerc-5.js
 * @description Exibe os números entre dois valores em ordem decrescente, do maior ao menor.
 */
let N1 = parseInt(prompt("Digite o primeiro número"));
let N2 = parseInt(prompt("Digite o segundo número"));

if (N1 > N2) {
    alert("O primeiro número é maior");
    console.log("O primeiro número é maior");

    for (let i = N1; i >= N2; i--) {
        console.log(i);
        alert(i);
    }
} else {
    alert("O segundo número é maior");
    console.log("O segundo número é maior");

    for (let i = N2; i >= N1; i--) {
        console.log(i);
        alert(i);
    }
}

