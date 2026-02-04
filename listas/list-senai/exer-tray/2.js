function validarNome(nome) {
  return new Promise((resolve, reject) => {
    if (nome.length < 3) {
      reject("Nome muito curto");
    } else {
      resolve(nome);
    }
  });
}

async function executar() {
  try {
    const nomeUsuario = "miguel"; 
    const nomeValidado = await validarNome(nomeUsuario);
    console.log(`Usuário cadastrado: ${nomeValidado}`);
  } catch (erro) {
    console.log(`Erro: ${erro}`);
  }
}

executar();
