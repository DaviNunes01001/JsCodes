/**
 * @file desafio.js
 * @description Gera a sequência de Fibonacci e exibe os primeiros termos.
 */
let p1 = 0; //Numero 1 
let p2 = 1; //Numero 2

console.log(p1); // Exibe o 0 
alert(p1)
console.log(p2); // Exibe o 1
alert(p2);

let i = 3; //Começa no 3 numero
while (i <= 10){  //Vai de 1 ate 10 fazendo a sequência
    let p3 = p1 + p2; //soma dos anteriores
    console.log(p3);
    alert(p3);

    p1 = p2; // P1 vira o P2;
    p2 = p3; /// P2 vira o p3;

    i++; //contador ate 10
}