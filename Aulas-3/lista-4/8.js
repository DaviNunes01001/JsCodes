let listaDeConvidados = [];

function adicionarConvidado(nome, idade) {
  let novoConvidado = {
    nome: nome,
    idade: idade,
  };
  idade >= 18
    ? (listaDeConvidados.push(novoConvidado),
      console.log(`Convidade ${nome} convidado com sucesso!`))
    : console.log(
        `Desculpe, ${nome}, mas você não tem idade suficiente para entrar na festa.`,
      );
}

adicionarConvidado("Alice", 25);
console.log("");
adicionarConvidado("Bob", 17);
console.log("");
adicionarConvidado("Charlie", 30);
console.log("");
console.log("Lista de Convidados:", listaDeConvidados);
