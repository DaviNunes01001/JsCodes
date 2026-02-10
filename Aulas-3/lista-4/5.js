const produtos = [
    {nome: "Mouse gamer", preco: 50, quantidade: 50},
    {nome: "Pc gamer", preco: 5000, quantidade: 10},
    {nome: "teclado", preco: 100, quantidade: 30}
]

for(let i = 0; i < produtos.length; i++) {
    let prod = produtos[i]
    console.log(`Produto:${prod.nome} | preço:${prod.preco}`)
}
