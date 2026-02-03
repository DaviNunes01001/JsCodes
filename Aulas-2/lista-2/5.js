function atualizarIdade(usuario, novaIdade) {
  return {
    ...usuario,
    idade: novaIdade
  };
}

const usuario = { nome: "Ana", idade: 25 };
const usuarioAtualizado = atualizarIdade(usuario, 30);

console.log(usuarioAtualizado);
