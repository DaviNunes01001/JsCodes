const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];

const contagem = frutas.reduce((contador, fruta) => {
  contador[fruta] = (contador[fruta] || 0) + 1;
  return contador;
}, {});

console.log(contagem);
