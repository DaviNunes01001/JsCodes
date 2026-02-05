// Função simples: greet
// Recebe um nome e retorna uma saudação curta.
// Se nenhum nome for passado, usa 'Visitante'.
function greet(name = 'Visitante') {
  return `Olá, ${name}!`;
}

// Exemplos de uso
console.log(greet('Ana'));    // Olá, Ana!
console.log(greet());         // Olá, Visitante!
