// Exemplo: Encontrar o primeiro número maior que 10
let numeros = [4, 7, 9, 16, 30];

// Usando find para encontrar o primeiro número maior que 10
let primeiroMaiorqueDez = numeros.find(function(numeroatual) {
    return numeroatual > 10;
});

// Mostrando o resultado
console.log('Lista de números:', numeros);
console.log('Primeiro número maior que 10:', primeiroMaiorqueDez); // Saída: 16