const calculoMedia = (notas) => {
    const soma = notas.reduce((acc, cnt) => {
        return acc + cnt
    },0)

    return soma / notas.length
}
const arraaa = [10,20,30,40]
console.log(calculoMedia(arraaa))