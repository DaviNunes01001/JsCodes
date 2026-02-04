let numeros = [3,7,9,12,5]

let primeiraPar =  numeros.find(function(numeroatual){
    return numeroatual % 2 === 0
})

console.log(primeiraPar)