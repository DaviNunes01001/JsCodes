const produtos = [
  { nome: "Camisa", preco: 250 },
  { nome: "Tenis", preco: 400 },
  { nome: "Calça", preco: 200 },
];

const valorAjustado = produtos.map((novo) => novo.preco * 1.1);
console.log(valorAjustado);
