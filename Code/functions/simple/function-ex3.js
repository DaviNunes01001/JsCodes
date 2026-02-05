// Função simples: isEven
// Retorna true se o número for par, false caso contrário.
function isEven(n) {
  return typeof n === 'number' && n % 2 === 0;
}

// Exemplos
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(10)); // true
