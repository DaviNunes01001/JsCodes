function calcularDesconto(preco, percentualDesconto) {
  let desconto = preco * (percentualDesconto / 100);
  let precoFinal = preco - desconto;
  return {
    precoOriginal: preco,
    desconto: desconto,
    precoFinal: precoFinal
  };
}
// Usando nossa calculadora: 
let produto1 = calcularDesconto(100, 20); // Produto de R$100 com 20% off 
let produto2 = calcularDesconto(50, 10);  // Produto de R$50 com 10% off 
console.log(produto1); // { precoOriginal: 100, desconto: 20, precoFinal: 80 } 
console.log(`Produto custava R$${produto1.precoOriginal}, com desconto fica R$${produto1.precoFinal}`); // Produto custava R$100, com desconto fica R$80 
