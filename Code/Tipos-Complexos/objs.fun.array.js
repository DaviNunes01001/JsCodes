// Sistema de uma loja virtual completo!
// OBJETOS: Produtos da loja
let produto1 = {
  nome: "Smartphone Galaxy",
  preco: 899.9,
  categoria: "Eletrônicos",
  estoque: 15,
  avaliacao: 4.5,
};
let produto2 = {
  nome: "Fone Bluetooth",
  preco: 199.9,
  categoria: "Eletrônicos",
  estoque: 8,
  avaliacao: 4.2,
};
// ARRAY: Lista de produtos
let catalogo = [produto1, produto2];
// FUNCTION: Máquina de buscar produtos
function buscarProdutoPorNome(nome) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nome) {
      return catalogo[i];
    }
  }
  return "Produto não encontrado";
}
// FUNCTION: Calculadora de carrinho
function calcularCarrinho(produtos) {
  let total = 0;
  let resumo = [];
  for (let i = 0; i < produtos.length; i++) {
    total = total + produtos[i].preco;
    resumo.push(produtos[i].nome);
  }
  return {
    itens: resumo,
    valorTotal: total,
    quantidadeItens: produtos.length,
  };
}
// Simulando uma compra:
let carrinho = [produto1, produto2];
let resumoCompra = calcularCarrinho(carrinho);
console.log("=== RESUMO DA COMPRA ===");
console.log(`Itens: ${resumoCompra.itens.join(", ")}`);
console.log(`Quantidade: ${resumoCompra.quantidadeItens} itens`);
console.log(`Total: R$ ${resumoCompra.valorTotal}`);
// Saída:
// === RESUMO DA COMPRA ===
// Itens: Smartphone Galaxy, Fone Bluetooth
// Quantidade: 2 itens
// Total: R$ 1099.8
