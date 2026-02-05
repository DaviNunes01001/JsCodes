const notas = [10,3,7]
const media = notas.reduce(function (acumulador, contador) {
    return acumulador + contador
},0)
console.log(`Media:${media/notas.length}`)