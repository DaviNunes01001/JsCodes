/**
 * @file 1.js
 * @description Recebe 10 números ímpares do usuário e exibe o vetor completo.
 */
let verificador = true; //cria uma variavel chamada verificador

while(verificador){
const numbers = []; //cria uma const numbers para pedir os 10 numeros
let index = 0;

while (numbers.length < 10) {
    const input = prompt(`Digite um número ímpar (${numbers.length + 1}/10):`); //perguntando os 10 numeros

    const num = Number(input); //criar uma variavel q transforma a resposta da pergunta(input) em numero, caso seja um numero(sem isto o codigo quebra)

    if (num % 2 === 0) {
        alert('Número par detectado. Digite um número ímpar.');
        continue;
    }

    numbers[index] = num;
    index++;
}

if (numbers.length === 10) {
    alert(`Vetor completo: ${numbers.join(', ')}`);
}
}