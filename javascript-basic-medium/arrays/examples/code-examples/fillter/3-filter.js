// Exemplo de filter para encontrar nomes que começam com 'A'
// Criando um array com vários nomes
const nomes = ['Ana', 'Bruno', 'Amanda', 'Carlos', 'Adriana', 'Daniel'];

// Usando filter para criar um novo array apenas com nomes que começam com 'A'
// A função startsWith() verifica se a string começa com determinado caractere
const nomesComA = nomes.filter(nome => nome.startsWith('A'));

// Mostrando os resultados
console.log('Lista de nomes:', nomes);
console.log('Nomes que começam com A:', nomesComA); // Saída: ['Ana', 'Amanda', 'Adriana']