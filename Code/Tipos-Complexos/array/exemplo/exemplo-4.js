let numeros = [1, 2, 3];

// Adicionar item no final
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

// Remover último item
numeros.pop();
console.log(numeros); // [1, 2, 3]

// Ver quantos itens tem
console.log(numeros.length); // 3

// Procurar um item
let posicao = numeros.indexOf(2);
console.log(posicao); // 1 (2 está na posição 1)
