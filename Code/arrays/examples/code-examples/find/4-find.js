let palavras = ["elefante", "gato", "cachorro", "maçã"]

let palavraCurta = palavras.find(function(palavraAtual){
    return palavraAtual.length < 5
})

console.log(palavraCurta)