// Exemplo: Encontrar a primeira pessoa com idade maior que 20
// Criando um array de objetos (pessoas)
const pessoas = [
    { nome: 'João', idade: 18 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 25 },
    { nome: 'Ana', idade: 19 }
];

// Usando find para encontrar a primeira pessoa com mais de 20 anos
const pessoaMaiorQue20 = pessoas.find(pessoa => pessoa.idade > 20);

// Mostrando os resultados
console.log('Lista de pessoas:', pessoas);
console.log('Primeira pessoa maior que 20 anos:', pessoaMaiorQue20); 
// Saída: { nome: 'Maria', idade: 22 }