function esperaraluno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Esperando aluno...")
        }, 2000);
    });
}

async function inicioPasseio() {
    console.log("onibus aguardando Aluno...")

    const aluno = await esperaraluno();
    console.log(aluno)

    console.log("O passeio começou")
}

inicioPasseio()