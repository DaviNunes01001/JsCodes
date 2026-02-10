function processar(numero, operacao) {
    let resultado = operacao(numero);
    console.log("Resultado " + resultado);
   
};
processar(5, (num) => num * 2)
