// Exemplo 1: Verificar se existe pelo menos um número maior que 10
// some() retorna true se pelo menos um elemento do array satisfizer a condição
const numeros = [2, 5, 8, 11, 4];

// A função de callback verifica se o número atual é maior que 10
const temMaiorQueDez = numeros.some(function(numeroAtual) {
    return numeroAtual > 10; // nota: usamos '>' para comparação
});

console.log('Números:', numeros);
console.log('Existe número maior que 10?', temMaiorQueDez); // Saída: true (11)