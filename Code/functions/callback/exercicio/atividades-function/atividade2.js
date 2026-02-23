function executarCalculo(num1, num2, calculo) {
    const resultado = calculo(num1, num2);
    console.log(resultado);
}

const soma = function(num1, num2) {
    return num1 + num2;
};

const subtracao = function(num1, num2) {
    return num1 - num2;
};

executarCalculo(10, 5, soma);
executarCalculo(10, 5, subtracao);