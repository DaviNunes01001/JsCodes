function checarPar(num,callback) {
    const resultado = (num % 2 === 0) ? "par" : "ímpar";
    callback(resultado);
}

checarPar(6, function(resultado) {
    console.log(`O número é ${resultado}`);
});