/**
 * @file 5.js
 * @description Compara dois números e exibe os números inteiros entre eles.
 */
let num1 = parseInt(prompt("Coloque o primeiro número: "));
let num2 = parseInt(prompt("Coloque o segundo número: "));

if (num1 > num2) {
    alert("O primeiro número é maior que o segundo.");
    console.log("O primeiro número é maior que o segundo.");

    for (let i = num2 + 1; i < num1; i++) {
        console.log(i);
        alert(i);
    }

} else if (num1 < num2) {
    alert("O segundo número é maior que o primeiro.");
    console.log("O segundo número é maior que o primeiro.");

    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
        alert(i);
    }

} else {
    alert("Os dois números são iguais.");
    console.log("Os dois números são iguais.");
}
