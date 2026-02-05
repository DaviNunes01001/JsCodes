async function alunoarrumando(nome, tempo) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`${nome} esta pronto`)
    }, tempo)
  });
}

async function passeioEscolar() {
    console.log("O onibus esta esperando os alunos ficarem prontos...")

    const [aluno1, aluno2, aluno3] = await Promise.all([
        alunoarrumando("João", 2000),
        alunoarrumando("Maria", 3000),
        alunoarrumando("Lucas", 1500)
    ]);
    console.log(aluno1)
    console.log(aluno2)
    console.log(aluno3)

    console.log("Todos prontos! O onibus pode partir")
}

passeioEscolar()