// Exemplo de reduce para encontrar o maior número
// Criando um array com números
const numeros = [5, 12, 8, 130, 44];

// Usando reduce para encontrar o maior número
// Em cada iteração, compara o acumulador com o número atual
const maiorNumero = numeros.reduce((maior, numero) => {
    return numero > maior ? numero : maior;
}, numeros[0]);

// Mostrando os resultados
console.log('Lista de números:', numeros);
console.log('Maior número:', maiorNumero); // Saída: 130