let heroi = {
  nome: "Batman",
  vida: 100,
  ataque: 20,
};

let mostro = {
  nome: "Coringa",
  vida: 50,
  ataque: 10,
};

function atacar(atacante, defensor) {
  defensor.vida -= atacante.ataque;
  console.log(
    `${atacante.nome} atacou ${defensor.nome} e causou ${atacante.ataque} de dano!`,
  );
  console.log(`${defensor.nome} agora tem ${defensor.vida} de vida.`);
}

atacar(heroi, mostro);
atacar(mostro, heroi);
