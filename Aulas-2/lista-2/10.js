const list = [10,20,30]
const somarTresNumero = (a,b,c)=> {
    return a+b+c
}
console.log(somarTresNumero(...list))

const array2num = [10,20]
console.log(somarTresNumero(...array2num))
// ele da a saida como indefinida, pois nao existe o terceiro argumento