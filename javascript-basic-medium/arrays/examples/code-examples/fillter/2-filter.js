// Exemplo de filter para encontrar números pares
// Criando um array com números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando filter para criar um novo array apenas com números pares
// A função retorna true para números que queremos manter (pares)
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Mostrando os resultados
console.log('Números originais:', numeros);
console.log('Apenas números pares:', numerosPares); // Saída: [2, 4, 6, 8, 10]