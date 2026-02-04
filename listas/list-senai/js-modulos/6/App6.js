const aplique = require('./6.js');
const valor = 250;

const imposto = aplique.calcularImposto(valor);
const desconto = aplique.calcularDesconto(valor, 20);

const impostoFormatado = aplique.formatarMoeda(imposto);
const descontoFormatado = aplique.formatarMoeda(desconto);
const valorFormatado = aplique.formatarMoeda(valor);

console.log(`Valor do imposto: ${impostoFormatado}`);
console.log(`Valor com desconto aplicado: ${descontoFormatado}`);
console.log(`Valor original formatado: ${valorFormatado}`);
