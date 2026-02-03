function atualizarPerfil(usuario, novosDados) {
  return {
    ...usuario,
    ...novosDados
  };
}

const usuario = { nome: "miguel", idade: 500, cidade: "ambriosinha" };
const novosDados = { idade: 17, cidade: "São Paulo" };
const usuarioAtualizado = atualizarPerfil(usuario, novosDados);
console.log(usuarioAtualizado);