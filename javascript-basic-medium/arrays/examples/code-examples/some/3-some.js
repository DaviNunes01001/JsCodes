// Exemplo 3: Verificar se existe pelo menos uma pessoa maior de idade
// Array de objetos representando pessoas
const pessoas = [
  { nome: 'João', idade: 16 },
  { nome: 'Maria', idade: 20 },
  { nome: 'Pedro', idade: 17 }
];

// some() verifica se há ao menos um objeto que satisfaça a condição
const existeMaiorDeIdade = pessoas.some(pessoa => pessoa.idade >= 18);

console.log('Pessoas:', pessoas);
console.log('Existe pelo menos uma pessoa maior de idade?', existeMaiorDeIdade); // Saída: true (Maria)
