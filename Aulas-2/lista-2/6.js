function adicionarPropriedade(objeto, chave, valor) {
  return {
    ...objeto,
    [chave]: valor
  };
}

const pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa)
const resultado = adicionarPropriedade(pessoa, "cidade", "São Paulo");
console.log(resultado);