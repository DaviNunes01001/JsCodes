const produtos = [ 
{ nome: "Notebook", preco: 3500 }, 
{ nome: "Mouse", preco: 80 }, 
{ nome: "Teclado", preco: 150 } 
]; 
const infla = produtos.filter( maior=> (maior.preco > 100))
const nome1 = infla.map(nome => `nome: ${nome.nome}` )
console.log(nome1)
