function processar(a,b,operacao) {
   let resultado = operacao(a,b)
   console.log(`Resultado da conta:${resultado}`)
};
processar(2,3, (a,b) => a + b)