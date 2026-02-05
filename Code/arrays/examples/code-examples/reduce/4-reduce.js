// Exemplo de reduce para contar ocorrências de cada fruta
// Criando um array com frutas
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

// Usando reduce para criar um objeto que conta cada fruta
// O acumulador é um objeto que armazena a contagem
const contagem = frutas.reduce((acumulador, fruta) => {
    // Se a fruta já existe, aumenta o contador, senão começa com 1
    acumulador[fruta] = (acumulador[fruta] || 0) + 1;
    return acumulador;
}, {});

// Mostrando os resultados
console.log('Lista de frutas:', frutas);
console.log('Contagem de cada fruta:', contagem); 
// Saída: { maçã: 3, banana: 2, laranja: 1 }