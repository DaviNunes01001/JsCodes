const valorCompra = 120;
const desconto = valorCompra >= 100 ? `Compra passou de R$100, Valor:R$${valorCompra}. Desconto de 10% aplicado Valor final:R$${(valorCompra * 0.1) - valorCompra}` : `Valor final da Compra${valorCompra}`
console.log(desconto)