const produtos = [
  { nome: "Camisa", preco: 250 },
  { nome: "Tenis", preco: 400 },
  { nome: "Calça", preco: 200 },
];

const NomeProdutoDesejado = produtos.filter(nome => nome.nome === "Camisa");
console.log(NomeProdutoDesejado);
