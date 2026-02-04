// Função simples: somaArray
// Recebe um array de números e retorna a soma. Ignora valores não numéricos.
function somaArray(numbers) {
  if (!Array.isArray(numbers)) return 0;
  let total = 0;
  for (const n of numbers) {
    if (typeof n === 'number' && !Number.isNaN(n)) total += n;
  }
  return total;
}

// Exemplos
console.log(somaArray([10, 20, 30])); // 60
console.log(somaArray([]));           // 0
console.log(somaArray([5, 'a', 10])); // 15 (ignora 'a')
