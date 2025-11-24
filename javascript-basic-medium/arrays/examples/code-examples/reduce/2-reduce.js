// Exemplo de reduce para somar todos os números de um array
// Criando um array com números
const numeros = [10, 20, 30, 40, 50];

// Usando reduce para somar todos os números
// accumulator: valor acumulado até o momento
// numero: valor atual sendo processado
const soma = numeros.reduce((accumulator, numero) => accumulator + numero, 0);

// Mostrando os resultados
console.log('Números do array:', numeros);
console.log('Soma total:', soma); // Saída: 150