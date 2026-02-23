function mapear(array, funcao) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = mapear(numeros, function(num) {
    return num * 2;
});

console.log(numerosDobrados);