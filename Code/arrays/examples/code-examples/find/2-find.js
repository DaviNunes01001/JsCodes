// Exemplo: Encontrar a primeira fruta que começa com 'M'
// Criando um array de frutas
const frutas = ['Banana', 'Laranja', 'Maçã', 'Morango', 'Pera'];

// Usando find para encontrar a primeira fruta que começa com 'M'
const frutaComM = frutas.find(fruta => fruta.startsWith('M'));

// Mostrando os resultados
console.log('Lista de frutas:', frutas);
console.log('Primeira fruta com M:', frutaComM); // Saída: Maçã