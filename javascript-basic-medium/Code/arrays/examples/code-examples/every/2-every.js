let nomes = ["ana", "joão", "carlos"];

let todosNomesGrande = nomes.every(function(nomeAtual){
    return nomeAtual.length > 3;
})

console.log(todosNomesGrande)