const carrinho = [
  { nome: "Camisa", preco: 250 },
  { nome: "Tenis", preco: 40 },
  { nome: "Calça", preco: 100 },
];

const valorCompra = carrinho.reduce(
  (acumulador, valor) => acumulador + valor.preco,
  0,
);
console.log(valorCompra);