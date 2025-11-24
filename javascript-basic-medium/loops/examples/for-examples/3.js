/**
 * @file 3.js
 * @description A partir de um número par informado, exibe os próximos 10 pares (20 de diferença).
 */
let pergunta = Number(prompt("Digite um número par: "));

for (let i = pergunta; i <= pergunta + 20; i += 2) {
    console.log(i);
    alert(i);
}