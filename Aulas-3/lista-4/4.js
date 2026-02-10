function calcularMedia(notas) {
  const soma = notas.reduce(function (acc, nota) {
    return acc + nota;
  }, 0);

  return soma / notas.length;
}

const boletim = { nome: "Davi", notas: [1, 7, 6], aprovado: true };
const media = calcularMedia(boletim.notas);
if (media < 7) {
  boletim.aprovado = false;
} else if (media >= 7) {
  boletim.notas = true;
}

console.log(`nome do aluno:${boletim.nome}, notas:${boletim.notas}`);
console.log(`Media do aluno:${media.toFixed(2)}`);
console.log(`Status de aprovação:${boletim.aprovado}`);
