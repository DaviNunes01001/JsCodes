/**
 * @file 3.js
 * @description Encontra o maior número em um vetor de 10 posições e seu índice.
 */
// Cria um vetor com 10 posições
let numeros = [];

// Leitor dos números do usuário
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros[i] = num; // Armazena o número diretamente no índice correspondente
}

// Inicializa o maior valor e o índice do maior
let maior = numeros[0];      // O primeiro número é considerado o maior inicialmente
let indiceMaior = 0;         // O índice inicial é 0

// Percorre o vetor para encontrar o maior número e seu índice
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
        indiceMaior = i;
    }
}

// Exibe o resultado
alert(`O maior número é ${maior} e está na posição (índice) ${indiceMaior}.`);
console.log(`O maior número é ${maior} e está na posição (índice) ${indiceMaior}.`);
