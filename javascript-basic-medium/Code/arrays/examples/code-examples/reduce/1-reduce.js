let numeros = [1,2,3,4]
let soma = numeros.reduce(function(acumulador, numeroatual){
    return acumulador + numeroatual;
},0)

console.log(soma)